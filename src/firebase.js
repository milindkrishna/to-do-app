// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxSeQlMipI6dqPwA8d5T3tan2zg37lZR0",
  authDomain: "to-do-app-57d2b.firebaseapp.com",
  projectId: "to-do-app-57d2b",
  storageBucket: "to-do-app-57d2b.appspot.com",
  messagingSenderId: "1046003753501",
  appId: "1:1046003753501:web:0f2d1aa0d9d023f0bb5cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)