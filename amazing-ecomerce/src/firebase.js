// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8gYSXqiu7mA8fIx5TygAxKXoc2_iGGlE",
  authDomain: "amazing-ecomerce.firebaseapp.com",
  projectId: "amazing-ecomerce",
  storageBucket: "amazing-ecomerce.appspot.com",
  messagingSenderId: "772100436622",
  appId: "1:772100436622:web:eb8bfcfb9ed0c6ee7fcfdf",
  measurementId: "G-ZX3Z6QSR34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }