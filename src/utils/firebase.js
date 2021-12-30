// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBzGUFCHxErCr5hA59EPKCNje9mcZHsaDE",

  authDomain: "random-user-app-a70db.firebaseapp.com",

  projectId: "random-user-app-a70db",

  storageBucket: "random-user-app-a70db.appspot.com",

  messagingSenderId: "23688520321",

  appId: "1:23688520321:web:ccfdb5414fbae0328b2380"

};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export default firebase;