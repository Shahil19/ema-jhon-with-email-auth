// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCThVdqEVs0_KDKnCLp60xbaNFplh1mMiE",
    authDomain: "ema-john-simple-df904.firebaseapp.com",
    projectId: "ema-john-simple-df904",
    storageBucket: "ema-john-simple-df904.appspot.com",
    messagingSenderId: "508902946247",
    appId: "1:508902946247:web:4a3b3f7d0b991f58ad55e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;