import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBvTN4CDuVnniLJo1eEmEiiXzzFiUbetI",
    authDomain: "to-do-app-5bd02.firebaseapp.com",
    databaseURL: "https://to-do-app-5bd02.firebaseio.com",
    projectId: "to-do-app-5bd02",
    storageBucket: "",
    messagingSenderId: "130943691836",
    appId: "1:130943691836:web:f9b2a93a06481a7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const databaseRef = firebase.database().ref();

  export const firebaseRef = databaseRef.child("newTask");