import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx1OH9CsVPYVO1ePKfFcxahSk-i0JbeHE",
  authDomain: "login-6356c.firebaseapp.com",
  projectId: "login-6356c",
  storageBucket: "login-6356c.appspot.com",
  messagingSenderId: "472082603083",
  appId: "1:472082603083:web:5519154ca7cb89f0d381ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);