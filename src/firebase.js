import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdBrtGwKLpsm9jpBBrfaYFkuGqU7swH-8",
  authDomain: "jules-shoe-palace.firebaseapp.com",
  databaseURL: "https://jules-shoe-palace-default-rtdb.firebaseio.com",
  projectId: "jules-shoe-palace",
  storageBucket: "jules-shoe-palace.appspot.com",
  messagingSenderId: "791290447835",
  appId: "1:791290447835:web:d4a3928edce122f2ca09fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Google Authentication Provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Facebook Authentication Provider (Note: Facebook authentication requires additional setup)
// const facebookProvider = new FacebookAuthProvider();

// Firestore
const db = getFirestore(app);

export { app, auth, googleProvider, facebookProvider, db };
