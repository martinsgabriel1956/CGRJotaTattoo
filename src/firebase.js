import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQE-ThLhOP8pmzxT_1qgI12eMQ3v6t3KQ",
    authDomain: "cgrjotatattoo-f13df.firebaseapp.com",
    projectId: "cgrjotatattoo-f13df",
    storageBucket: "cgrjotatattoo-f13df.appspot.com",
    messagingSenderId: "170093427441",
    appId: "1:170093427441:web:cebcde4056413839df4750"
})

var db = firebaseApp.firestore();

export {db}