import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9aDtwYd7OMzOyk6tQti0jgQxHeRabrzA",
  authDomain: "todooo-3cc5d.firebaseapp.com",
  databaseURL: "https://todooo-3cc5d.firebaseio.com",
  projectId: "todooo-3cc5d",
  storageBucket: "todooo-3cc5d.appspot.com",
  messagingSenderId: "745331909154",
  appId: "1:745331909154:web:a5c79b562a01a66373e07b"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
