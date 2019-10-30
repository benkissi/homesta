import ListingsActionTypes from './listings-types'

export const addingListingStart = details => ({
    type: ListingsActionTypes.ADDING_LISTING_START,
    payload: details
})

export const addingListingSuccess = agentId => ({
    type: ListingsActionTypes.ADDING_LISTING_SUCCESS,
    payload: agentId
})

export const addingListingFailure = error => ({
    type: ListingsActionTypes.ADDING_LISTING_FAILURE,
    payload: error
})

export const gettingListingsStart = agentId => ({
    type: ListingsActionTypes.GET_LISTINGS_START,
    payload: agentId
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

export const setLoadingState = loadingState => ({
    type: ListingsActionTypes.SET_LOADING_STATE,
    payload: loadingState
})

