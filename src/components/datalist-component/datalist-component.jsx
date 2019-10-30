import React from 'react'

import Input from '../Input-component/input-component'

import { Wrapper } from './datalist-styles'


const DataList = (props) => {
    return (
        <Wrapper width={props.width}>
            <Input type="text" name={props.name} value={props.value} onChange={props.onChange} form={props.form} list={props.uid} width={props.width} placeholder={props.placeholder} />

            <datalist id={props.uid}>
                {props.data ? props.data.map((item, index) =>
                    <option key={index} value={item} />
                ) : ""}
            </datalist>
        </Wrapper>
    )
}

export default DataList