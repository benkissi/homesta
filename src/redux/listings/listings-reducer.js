import ListingsActionTypes from './listings-types'

const INITIAL_STATE = {
    search: null,
    featured: null,
    mostViewed: null,
    agent: null,
    addingListing: null,
    gettingListings: null,
    makingSearch: null,
    error: null
}

const ListingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ListingsActionTypes.SET_LOADING_STATE:
            return {
                ...state,
                loading: action.payload
            }
        case ListingsActionTypes.ADDING_LISTING_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ListingsActionTypes.GET_AGENT_LISTINGS_SUCCESS:
            return {
                ...state,
                agent: action.payload
            }
        case ListingsActionTypes.SEARCH_LISTINGS_SUCCESS:
            return {
                ...state,
                search: action.payload
            }
        case ListingsActionTypes.GET_LISTINGS_FAILURE:
        case ListingsActionTypes.ADDING_LISTING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default ListingsReducer