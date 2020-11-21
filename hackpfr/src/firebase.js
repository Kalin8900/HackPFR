import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC8JBFxgCC3r77R0OHLPY75MwQDyq7Owm8",
    authDomain: "hackpfr.firebaseapp.com",
    databaseURL: "https://hackpfr.firebaseio.com",
    projectId: "hackpfr",
    storageBucket: "hackpfr.appspot.com",
    messagingSenderId: "458799609355",
    appId: "1:458799609355:web:0d984f7bd56e5654f6f90e",
    measurementId: "G-19MKNJ3065"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;