import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../../components/button-component/button-component'
import Modal from '../../../components/modal/modal-component'
import AddPropertyForm from '../../../components/add-property-form/add-property-form-component'
import ListingCard from '../../../components/listing-card-component/listing-card-component'
import Card from './../../../components/card-component/card-component'

import { addingListingStart, gettingListingsStart } from '../../../redux/listings/listings-actions'

import { EmptyState, Wrapper, ActionBar, ListingsContainer } from './agent-listings-styles'

const AgentListings = ({ agentListings, addingListing, currentUser, getListings }) => {
    let history = useHistory()
    const [state, setState] = useState({})

    useEffect(() => {
        if (currentUser && !agentListings) {
            getListings(currentUser.id)

        }
    })

    const toggleModal = () => {
        setState({ openModal: !state.openModal })
    }

    const onInputChange = (e) => {
        console.log('hey clicked')
    }

    const onFormSubmit = (details) => {
        details.userId = currentUser.id
        console.log('onsubmit', details)
        addingListing(details)
    }

    const cardClick = (listing) => {
        history.push(`${url}/${listing.id}`, { ...listing })
    }

    const cardSize = '30%'
    let { path, url } = useRouteMatch();

    return (
        <Wrapper>
            {
                agentListings ?
                    <ActionBar>
                        <Button padding="10px" margin="5px" width="200px" onClick={toggleModal} text="Add a property" bgColor="#69eed3" />
                    </ActionBar> : ''

            }
            {
                !agentListings ?
                    <EmptyState>
                        <h2>You don't have any properties yet.<br /> Click the button to add one</h2>
                        <Button onClick={toggleModal} text="Add a property" bgColor="#69eed3" />
                    </EmptyState> :
                    (
                        <ListingsContainer>{agentListings.map((listing, index) =>
                            <Card
                                click={() => cardClick(listing)}
                                key={index}
                                image={listing.images[0]}
                                title={listing.title}
                                description={listing.description}
                                location={listing.location}
                                price={listing.amount}
                                rooms={listing.rooms}
                                period={listing.period}
                                baths={listing.baths}
                                type={listing.type}
                                width={cardSize}
                            />
                        )}
                        </ListingsContainer>
                    )

            }
            <Modal width="medium" toggle={toggleModal} open={state.openModal} content={<AddPropertyForm onInputChange={onInputChange} onSubmit={onFormSubmit} />} />
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    agentListings: state.listings.agent,
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    addingListing: (details) => dispatch(addingListingStart(details)),
    getListings: (agentId) => dispatch(gettingListingsStart(agentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgentListings)