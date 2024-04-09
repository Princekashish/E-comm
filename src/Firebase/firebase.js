// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYhugTvjJ9VIcwZVlCst6aAgEoBtMxtFI",
  authDomain: "webe-com.firebaseapp.com",
  projectId: "webe-com",
  storageBucket: "webe-com.appspot.com",
  messagingSenderId: "974828031103",
  appId: "1:974828031103:web:6b5c4a94b21ce5c2b3434a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export{fireDB,auth}