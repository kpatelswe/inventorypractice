// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbdckmaahRZciiMTN2rxExYUGg6I0h-Fw",
  authDomain: "inventory-tracker-dd629.firebaseapp.com",
  projectId: "inventory-tracker-dd629",
  storageBucket: "inventory-tracker-dd629.appspot.com",
  messagingSenderId: "108550297879",
  appId: "1:108550297879:web:b2f8d6ee95b049c405ff52",
  measurementId: "G-6ME51JLXTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);

export {firestore}
