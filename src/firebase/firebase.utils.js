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