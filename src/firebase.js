import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCv91RfZZpGySiLnbGts7I7BYAO8JY2UM",
  authDomain: "pikazo-19770.firebaseapp.com",
  projectId: "pikazo-19770",
  storageBucket: "pikazo-19770.firebasestorage.app",
  messagingSenderId: "890932618788",
  appId: "1:890932618788:web:b269ed0693e627bcb51ab1",
  measurementId: "G-GW53FKX1P6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to Firestore
export const db = firebase.firestore();