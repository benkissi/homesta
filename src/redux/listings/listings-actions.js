import ListingsActionTypes from './listings-types'

export const addingListingStart = () => ({
    type: ListingsActionTypes.ADDING_LISTING_START
})

export const addingListingSuccess = listing => ({
    type: ListingsActionTypes.ADDING_LISTING_SUCCESS,
    payload: listing
})

export const addingListingFailure = error => ({
    type: ListingsActionTypes.ADDING_LISTING_FAILURE,
    payload: error
})

export const gettingListingsStart = () => ({
    type: ListingsActionTypes.GET_LISTINGS_START
})

export const searchListingsStart = searchParams => ({
    type: ListingsActionTypes.SEARCH_LISTINGS,
    payload: searchParams
})

export const searchListingsSuccess = listings => ({
    type: ListingsActionTypes.SEARCH_LISTINGS_SUCCESS,
    payload: listings
})

export const gettingAgentListingsSuccess = listings => ({
    type: ListingsActionTypes.GET_AGENT_LISTINGS_SUCCESS,
    payload: listings
})

export const gettingListingsFailure = error => ({
    type: ListingsActionTypes.GET_LISTINGS_FAILURE,
    payload: error
})

