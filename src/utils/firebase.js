// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGiyR92KzXZIOY0YPMWCEsRL5Gc2VV4_8",
  authDomain: "netflixgpt-997bc.firebaseapp.com",
  projectId: "netflixgpt-997bc",
  storageBucket: "netflixgpt-997bc.appspot.com",
  messagingSenderId: "55045223646",
  appId: "1:55045223646:web:0d798a711c4e8d44d57e4f",
  measurementId: "G-Q2ZNHKW83H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);