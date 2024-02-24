// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAjWKiU1cpmeh9-xOSzasa8GvKYPHmt70",
  authDomain: "chat-app-9a922.firebaseapp.com",
  projectId: "chat-app-9a922",
  storageBucket: "chat-app-9a922.appspot.com",
  messagingSenderId: "358353303202",
  appId: "1:358353303202:web:581d615f3ab891d8d289fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);