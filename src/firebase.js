// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPIYDMDjudgcdtfR9_cV6q5ZG_P9uATSE",
  authDomain: "react-and-tailwind.firebaseapp.com",
  projectId: "react-and-tailwind",
  storageBucket: "react-and-tailwind.appspot.com",
  messagingSenderId: "393106768834",
  appId: "1:393106768834:web:87d196699acfe8b7c50c5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)