import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCwiX83QKzBqrR4NfXCfNo6qgKgipMiloY",
//   authDomain: "chat-96fa1.firebaseapp.com",
//   projectId: "chat-96fa1",
//   storageBucket: "chat-96fa1.appspot.com",
//   messagingSenderId: "696128402713",
//   appId: "1:696128402713:web:dbc73bca4d6f1063230188",
//   measurementId: "G-ZLJVCR7YE9"
// };
//updated code 
// const firebaseConfig = {
//   apiKey: "AIzaSyDZYThiEPuOY0KHHF9gfoLxAafgm9SgedU",
//   authDomain: "pikazo-67c99.firebaseapp.com",
//   projectId: "pikazo-67c99",
//   storageBucket: "pikazo-67c99.firebasestorage.app",
//   messagingSenderId: "128785809955",
//   appId: "1:128785809955:web:7ff34dfa5e2d705062e796"
// };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to Firestore
export const db = firebase.firestore();