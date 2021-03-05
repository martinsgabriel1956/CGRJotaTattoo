import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6QzMu37pDhMQ4am2Kx40O6aNzutcwX88",
    authDomain: "cgrjotatattoo.firebaseapp.com",
    projectId: "cgrjotatattoo",
    storageBucket: "cgrjotatattoo.appspot.com",
    messagingSenderId: "743190978174",
    appId: "1:743190978174:web:ac830b3aee6ef3912f822f"
})

var db = firebaseApp.firestore();

export {db}