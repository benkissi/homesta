import React, { useState, useEffect } from 'react'

import Input from '../Input-component/input-component'
import DataList from '../datalist-component/datalist-component'
import Button from '../button-component/button-component'
import TextArea from '../text-area-component/text-area-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, Detail, BlockDetail, ThumbnailHolder, ThumbnailImage, ThumbnailCard } from './add-property-form-styles'

const AddPropertyForm = (props) => {
    const [requiredFields, setRequiredFields] = useState({
        title: '',
        location: '',
        type: '',
        amount: '',
        rooms: '',
        baths: '',
        furnished: '',
        owner: '',
        description: '',
        images: []
    })

    const [listingImages, setImages] = useState([])

    const [fieldsStatus, setFieldsStatus] = useState({
        emptyFields: false
    })

    const [optionalFields, setOptionalFields] = useState({
        period: ''
    })

    useEffect(() => {
        if (props.data) {
            const { period, ...rest } = props.data
            setRequiredFields({ ...rest })
            setOptionalFields({ period })
        }
    }, [props.data])

    const handleButtonClick = () => {
        setFieldsStatus({
            ...fieldsStatus,
            emptyFields: false
        })
        const fileInput = document.getElementById('img-upload')
        const numberOfFiles = fileInput.files.length
        const files = fileInput.files
        console.log('files', files)

        let isEmpty
        if (props.mode !== 'edit') {
            isEmpty = Object.values(requiredFields).some(x => (x === null || x === ''))
        } else {
            const keys = Object.keys(requiredFields).filter(key => key !== 'images' && key !== 'period')
            console.log(keys)
            isEmpty = keys.some(key => {
                console.log(requiredFields[key], key)
                return requiredFields[key] === ''
            })
        }

        console.log('isEmpty', isEmpty)
        if (numberOfFiles > 10) {
            alert("You can upload a maximum of 10 images")
            return
        }

        if (isEmpty) {
            setFieldsStatus({
                ...fieldsStatus,
                emptyFields: true
            })
            return
        }

        props.onSubmit({ requiredFields, optionalFields })
    }

    const onInputChange = async (e) => {
        e.preventDefault()

        const fileInput = document.getElementById('img-upload')
        const fileLength = fileInput.files.length

        if (e.target.name === 'images') {
            let imageUrls = []
            let files = e.target.files

            function setupReader(file) {
                var reader = new FileReader();
                reader.onload = function () {
                    imageUrls.push(reader.result);
                    if (imageUrls.length > 0) {
                        setImages(() => {
                            return [...imageUrls]
                        })
                    }
                }
                reader.readAsDataURL(file);
            }

            for (var i = 0; i < fileLength; i++) {
                setupReader(files[i]);
            }

            setRequiredFields(requiredFields => {
                return {
                    ...requiredFields,
                    images: requiredFields.images.concat(files)
                }
            })


        } else {
            if (e.target.name === 'period') {
                setOptionalFields({
                    ...optionalFields,
                    [e.target.name]: e.target.value
                })
            } else {
                setRequiredFields({
                    ...requiredFields,
                    [e.target.name]: e.target.value
                })
            }
        }

    }

    const removeImage = (index) => {
        const imgs = requiredFields.images
        console.log('image array', imgs)
        if (imgs) {
            imgs.splice(index, 1)
            setRequiredFields({
                ...requiredFields,
                images: imgs
            })
        }
    }

    const removeNewImage = (index) => {
        const imgs = listingImages
        console.log('image array', imgs)
        if (imgs) {
            imgs.splice(index, 1)
            setImages([...imgs])
        }
    }

    return (
        <Wrapper>
            <div>
                <h3>{props.formTitle ? props.formTitle : 'Add Property'}</h3><span>
                    {fieldsStatus.emptyFields ?
                        <p className="error-message"> Fields marked with * are required</p>
                        : ""
                    }
                </span>
            </div>
            <Detail>
                <p>Property Title *</p>
                <Input name="title" value={requiredFields.title} onChange={onInputChange} placeholder="Title" form="true" type="text" />
            </Detail>
            <Detail>
                <p>Property Location *</p>
                <Input name="location" value={requiredFields.location} onChange={onInputChange} placeholder="Location" form="true" type="text" />
            </Detail>

            <BlockDetail>
                <Detail>
                    <p>Type *</p>
                    <DataList uid="type" name="type" form="true" data={["For Rent", "For Sale", "For Lease"]} value={requiredFields.type} onChange={onInputChange} placeholder="Rent/Sale" />
                </Detail>
                <Detail>
                    <p>Amount *</p>
                    <Input name="amount" value={requiredFields.amount} onChange={onInputChange} type="number" placeholder="100" form="true" span="$" />

                </Detail>
                {
                    requiredFields.type === "For Rent" ?
                        <Detail>
                            <p>Period *</p>
                            <DataList uid="period" name="period" form="true" data={["Monthly", "Yearly"]} value={optionalFields.period} onChange={onInputChange} placeholder="Monthly/Yearly" />
                        </Detail> : ""
                }

            </BlockDetail>

            <BlockDetail>
                <Detail>
                    <p>Rooms *</p>
                    <Input name="rooms" value={requiredFields.rooms} onChange={onInputChange} type="number" placeholder="Number of rooms" form="true" />

                </Detail>
                <Detail>
                    <p>Baths *</p>
                    <Input name="baths" value={requiredFields.baths} onChange={onInputChange} type="number" placeholder="Number of baths" form="true" />

                </Detail>
            </BlockDetail>
            <BlockDetail>
                <Detail>
                    <p>Fully Furnished *</p>
                    <DataList type="text" name="furnished" uid="furnished" form="true" data={["Yes", "No"]} placeholder="Furnish status" value={requiredFields.furnished} onChange={onInputChange} />
                </Detail>
                <Detail>
                    <p>Are you the owner? *</p>
                    <DataList type="text" name="owner" uid="owner" form="true" data={["Yes", "No"]} placeholder="Is this property yours" value={requiredFields.owner} onChange={onInputChange} />
                </Detail>
            </BlockDetail>
            <Detail>
                <p>Description *</p>
                <TextArea name="description" form="true" placeholder="Add a description for the property" value={requiredFields.description} onChange={onInputChange} />
            </Detail>
            <Detail>
                <p>Upload images (Max: 10 Images) *</p>
                <Input name="images" id="img-upload" type="file" accept="image/gif, image/jpeg, image/png" form="true" onChange={onInputChange} multiple />
            </Detail>
            <Detail>
                <ThumbnailHolder>
                    {
                        props.mode === 'edit' ?
                            props.data.images.length > 0 ?
                                props.data.images.map((item, index) => (
                                    <ThumbnailCard key={index}>
                                        <div id="overlay" onClick={() => removeImage(index)}>
                                            <FontAwesomeIcon icon={faTimes} color="#ee6984" size='3x' />
                                        </div>
                                        <ThumbnailImage key={index} alt="thumbnail" src={item} />
                                    </ThumbnailCard>
                                )) : '' : ''

                    }
                    {
                        listingImages.length > 0 ?
                            listingImages.map((item, index) => (
                                <ThumbnailCard key={index}>
                                    <div id="overlay" onClick={() => removeNewImage(index)}>
                                        <FontAwesomeIcon icon={faTimes} color="#ee6984" size='3x' />
                                    </div>
                                    <ThumbnailImage key={index} alt="thumbnail" src={item} />
                                </ThumbnailCard>
                            )) : ''
                    }
                </ThumbnailHolder>
            </Detail>
            <Detail>
                <Button onClick={handleButtonClick} text={props.actionText ? props.actionText : "Add Property"} bgColor="#69eed3" />
            </Detail>

        </Wrapper>
    )
}

export default AddPropertyForm