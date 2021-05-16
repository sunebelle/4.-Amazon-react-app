import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBnP00vGF0xNqlgKCenN5mW5c6dcStgxS0",
  authDomain: "react21-9446b.firebaseapp.com",
  projectId: "react21-9446b",
  storageBucket: "react21-9446b.appspot.com",
  messagingSenderId: "1050810508698",
  appId: "1:1050810508698:web:b0bc3aa389f3d126d00623",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };
