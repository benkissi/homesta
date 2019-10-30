import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCb5aoPAjbBmFLuoT5Edyrp_k_zwy6kvLE",
    authDomain: "homesta-1eab2.firebaseapp.com",
    databaseURL: "https://homesta-1eab2.firebaseio.com",
    projectId: "homesta-1eab2",
    storageBucket: "gs://homesta-1eab2.appspot.com/",
    messagingSenderId: "332037046468",
    appId: "1:332037046468:web:0dd546baa1b7b38e7b0991",
    measurementId: "G-0K7RDWQ7XQ"
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage().ref()


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


const provider = new firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = async () => {
    const userDetails = await firebase.auth().signInWithPopup(provider)
    const user = userDetails.user

    return user
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const addCollectionandDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const newDocRef = collectionRef.doc()

    try {
        await newDocRef.set(objectToAdd)
        return true
    } catch (e) {
        return e
    }
}

export const getListings = async (agentId) => {
    try {
        let listings = []
        console.log('getting')
        const collectionRef = firestore.collection('listings')
        console.log('referrence', collectionRef)
        const querySnapshot = await collectionRef.where('userId', '==', agentId).get()
        console.log('querySnapshot', querySnapshot)
        querySnapshot.docs.forEach(async (item) => {
            console.log('item', await item.data())
            listings.push(item.data())
        })
        return listings

    } catch (e) {

    }

}
const mimes = {
    "image/gif": {
        "source": "iana",
        "compressible": false,
        "extensions": ["gif"]
    },
    "image/jpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["jpeg", "jpg", "jpe"]
    },
    "image/png": {
        "source": "iana",
        "compressible": false,
        "extensions": ["png"]
    },
    "image/svg+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["svg", "svgz"]
    },
    "image/webp": {
        "source": "apache",
        "extensions": ["webp"]
    },
};

export const uploadFile = (file, filename, ref, callbacks) => {
    if (!ref) ref = storage
    const metadata = {
        contentType: file.type
    }

    callbacks.success = callbacks.success || console.log;
    callbacks.progress = callbacks.progress || console.log;
    callbacks.error = callbacks.error || console.error;

    const task = ref.child(filename + mimes[file.type].extensions[0]).put(file, metadata)
    task.on('state_changed', callbacks.progress, callbacks.error, callbacks.success)

    return task.then((snapshot) => snapshot.ref.getDownloadURL())
}

export const progress = snapshot => {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    console.log('Upload is ' + progress + ' % done')

    switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        default:
            break
    }
}

export const error = function (error) {
    console.error(error);
}

export default firebase