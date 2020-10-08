import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrpvig-w31NsMTAWRCbXMlOoXkyO4ZEVI",
    authDomain: "facebook-messenger-clone-a3388.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-a3388.firebaseio.com",
    projectId: "facebook-messenger-clone-a3388",
    storageBucket: "facebook-messenger-clone-a3388.appspot.com",
    messagingSenderId: "417174498146",
    appId: "1:417174498146:web:0373ff8e920b628aad5a3b",
    measurementId: "G-93YPRZE1K9"
})

const db = firebaseApp.firestore();

export default db;