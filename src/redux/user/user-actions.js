import UserActionTypes from './user-types'

export const emailSignInStart = () => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START
})

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signUpSuccess = user => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})