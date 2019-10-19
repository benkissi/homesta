import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createFilter } from 'redux-persist-transform-filter'
import UserReducer from './user/user-reducer'
import Listings from './listings/listings-reducer'

const persistSubListings = createFilter('listings', ['featured', 'mostViewed'])



const persistConfig = {
    key: 'root',
    storage,
    transforms: [persistSubListings],
    whitelist: ['listings']

}

const rootReducer = combineReducers({
    user: UserReducer,
    listings: Listings
})

export default persistReducer(persistConfig, rootReducer)