import { takeLatest, put, all, call } from 'redux-saga/effects'

import { addCollectionandDocument, getListings, storage, progress, uploadFile } from '../../firebase/firebase.utils'

import { addingListingSuccess, addingListingFailure, setLoadingState, gettingAgentListingsSuccess } from './listings-actions'
import ListingsActionTypes from './listings-types'



export function* addListing({ payload: { optionalFields, requiredFields, userId } }) {
    yield put(setLoadingState(true))
    const propertyDetails = { userId, ...requiredFields, ...optionalFields }
    const imageRef = storage.child('listings/images')
    const imageUrls = yield call(saveFiles, Array.from(propertyDetails.images), imageRef, { progress })
    propertyDetails.images = imageUrls
    yield console.log('urls', imageUrls)
    yield console.log('final details', propertyDetails)
    const listingSaved = yield call(addCollectionandDocument, 'listings', propertyDetails)
    if (listingSaved === true) {
        console.log('saved****', listingSaved)
        yield put(addingListingSuccess(userId))
    } else {
        console.log('saved****', listingSaved)
        yield put(setLoadingState(false))
        yield put(addingListingFailure(listingSaved.message))
    }
}

export function* saveFiles(files, ref, callbacks) {
    const imagesUrls = yield Promise.all(files.map(file =>
        uploadFile(file, file.name, ref, callbacks)
    ))

    return imagesUrls
}

export function* getAgentListings({ payload: agentId }) {
    yield console.log('agent id', agentId)
    const listings = yield call(getListings, agentId)
    yield put(gettingAgentListingsSuccess(listings))
}

//Listeners

export function* onAddListing() {
    yield takeLatest(ListingsActionTypes.ADDING_LISTING_START, addListing)
}

export function* onGetAgentListings() {
    yield takeLatest(ListingsActionTypes.GET_LISTINGS_START, getAgentListings)
}

export function* listingsSaga() {
    yield all([
        call(onAddListing),
        call(onGetAgentListings)
    ])
}