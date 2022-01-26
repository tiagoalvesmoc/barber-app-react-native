import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyD5F3AByj6KtTwh1qfciSu0mC4zRWqC-EU",
  authDomain: "testes-a9322.firebaseapp.com",
  projectId: "testes-a9322",
  storageBucket: "testes-a9322.appspot.com",
  messagingSenderId: "797173288720",
  appId: "1:797173288720:web:e8f2947d49946d8c715f95",
  measurementId: "G-E1F595VFK0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
