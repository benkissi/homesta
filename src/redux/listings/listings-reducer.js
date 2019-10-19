import ListingsActionTypes from './listings-types'

const INITIAL_STATE = {
    search: null,
    featured: null,
    mostViewed: null,
    agent: null,
    loading: null,
    error: null
}

const ListingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ListingsActionTypes.GET_LISTINGS_START:
        case ListingsActionTypes.ADDING_LISTING_START:
            return {
                ...state,
                loading: true
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
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default ListingsReducer