// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBx76N8VJFZXTQd0iE6IL5fnYVD1MM6dA",
  authDomain: "practical11-8ee56.firebaseapp.com",
  projectId: "practical11-8ee56",
  storageBucket: "practical11-8ee56.firebasestorage.app",
  messagingSenderId: "364591148477",
  appId: "1:364591148477:web:1a95ef763c7fae24f236d4",
  measurementId: "G-S1BRPF2LWY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
