// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLhhXmdNIjrWSHEYNoSSZaS84mSfStvp4",
  authDomain: "personalblogappminihack-aug-23.firebaseapp.com",
  databaseURL: "https://personalblogappminihack-aug-23-default-rtdb.firebaseio.com",
  projectId: "personalblogappminihack-aug-23",
  storageBucket: "personalblogappminihack-aug-23.appspot.com",
  messagingSenderId: "489857459770",
  appId: "1:489857459770:web:d7001fd80eb71d5679b703",
  measurementId: "G-E9VX98NWJL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);