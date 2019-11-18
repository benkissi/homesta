import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import AddPropertyForm from '../../../components/add-property-form/add-property-form-component'

import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'

import { Wrapper, Details } from './property-paget-styles'

const PropertyPage = (agentListings) => {
    const history = useHistory()
    const { state } = history.location
    console.log(state)

    const handleEditSubmit = (edits) => {
        console.log(edits)
    }
    return (
        <Wrapper>
            <Details>
                <AddPropertyForm formTitle='Edit Property Details' actionText='Save Details' data={state} mode="edit" onSubmit={handleEditSubmit} />
            </Details>
        </Wrapper>
    )
}

const matchStateToProps = state => ({
    agentListings: state.listings.agent
})

export default connect(matchStateToProps)(PropertyPage)