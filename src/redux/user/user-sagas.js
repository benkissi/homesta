import { takeLatest, put, all, call } from 'redux-saga/effects'

import { signInFailure, signInSuccess, signUpSuccess, signOutSucces, signOutFailure, gettingUser } from './user-actions'

import { signinWithGoogle, createUserProfileDocument, auth, getCurrentUser } from '../../firebase/firebase.utils'
import UserActionTypes from './user-types'

export function* getUserSnapShot(userAuth, additionalData) {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapShot = yield userRef.get()
    console.log(userSnapShot)
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
}

export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch (e) {
        yield console.log(e)
    }

}

export function* signInWithGoogle() {
    try {
        const user = yield signinWithGoogle()
        yield getUserSnapShot(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        yield put(gettingUser(true))
        const userAuth = yield getCurrentUser()
        if (!userAuth) {
            yield put(gettingUser(false))
            return
        }
        yield getUserSnapShot(userAuth)
        yield put(gettingUser(false))
    } catch (error) {
        yield put(signInFailure(error))
        yield put(gettingUser(false))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSucces())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getUserSnapShot(user, additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession)
    ])
}