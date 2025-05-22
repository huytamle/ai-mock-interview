import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhOBqp7iV_NkaUbFU2Qjt17xjnvQuTFAA",
  authDomain: "prepwise-5d06d.firebaseapp.com",
  databaseURL:
    "https://prepwise-5d06d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prepwise-5d06d",
  storageBucket: "prepwise-5d06d.firebasestorage.app",
  messagingSenderId: "1002927238687",
  appId: "1:1002927238687:web:37504f92d231e2e4276f2a",
  measurementId: "G-6PTTN3NMCJ",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
