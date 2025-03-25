// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlzn0aoi1z7pj2lFwzPw64cki3Nm9n7M",
  authDomain: "register-login-a12.firebaseapp.com",
  projectId: "register-login-a12",
  storageBucket: "register-login-a12.firebasestorage.app",
  messagingSenderId: "767956103532",
  appId: "1:767956103532:web:00ce82d128f0bb46760349",
  measurementId: "G-745W3GYR0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)