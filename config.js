import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
        apiKey: "AIzaSyDXFAR1AYNNNQaxbHX_pAZrJZMapLzbM5E",
        authDomain: "voting-2583a.firebaseapp.com",
        projectId: "voting-2583a",
        storageBucket: "voting-2583a.appspot.com",
        messagingSenderId: "488088520078",
        appId: "1:488088520078:web:ef4c68086f4d6890ccd0df"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();