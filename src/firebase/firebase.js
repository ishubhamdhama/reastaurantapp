// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgE35k1iz8OJnyVknBy9coso1F3BA2egY",
  authDomain: "restaurantapp-d8403.firebaseapp.com",
  projectId: "restaurantapp-d8403",
  storageBucket: "restaurantapp-d8403.appspot.com",
  messagingSenderId: "1053021145458",
  appId: "1:1053021145458:web:e3ec5bd0676d2faa7435eb",
  measurementId: "G-SCD8DJFZBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};