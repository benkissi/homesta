import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user-sagas'
import { listingsSaga } from './listings/listings-saga'

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(listingsSaga)
    ])
}