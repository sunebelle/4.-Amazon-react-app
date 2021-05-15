// import firebase from "firebase";
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
// const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// const database = firebaseApp.database();
// const auth = firebaseApp.auth();
const db = firebase.firestore();
const auth = firebase.auth();
// const db = firebase.firestore();

// const authEmailLink = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be in the authorized domains list in the Firebase Console.
//   url: "http://localhost:3000/checkout/proceed",
//   // This must be true.
//   handleCodeInApp: true,
//   iOS: {
//     bundleId: "com.example.ios",
//   },
//   android: {
//     packageName: "com.example.android",
//     installApp: true,
//     minimumVersion: "12",
//   },
//   dynamicLinkDomain: "example.page.link",
// };
// auth
//       .sendSignInLinkToEmail(email, authEmailLink)
//       .then(() => {
//         window.localStorage.setItem("emailForSignIn", user.email);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });

export { auth, db };
