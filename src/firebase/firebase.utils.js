import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCb5aoPAjbBmFLuoT5Edyrp_k_zwy6kvLE",
    authDomain: "homesta-1eab2.firebaseapp.com",
    databaseURL: "https://homesta-1eab2.firebaseio.com",
    projectId: "homesta-1eab2",
    storageBucket: "",
    messagingSenderId: "332037046468",
    appId: "1:332037046468:web:0dd546baa1b7b38e7b0991",
    measurementId: "G-0K7RDWQ7XQ"
}

firebase.initializeApp(firebaseConfig)


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    console.log(snapshot)

    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = async () => {
    const userDetails = await firebase.auth().signInWithPopup(provider)
    const user = userDetails.user

    return user
}

export default firebase