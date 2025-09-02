// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your own Firebase configuration from your project settings
// Paste the firebaseConfig object you copied from the Firebase console here
const firebaseConfig = {
   apiKey: "AIzaSyC_1MhBvPgsqsGGVjCdF1W7h7unH3kKozg",
  authDomain: "thailand-visa-app.firebaseapp.com",
  projectId: "thailand-visa-app",
  storageBucket: "thailand-visa-app.firebasestorage.app",
  messagingSenderId: "968328568726",
  appId: "1:968328568726:web:da05ab5df65a89e52b47b7",
  measurementId: "G-K54Q2VEQEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore
export const db = getFirestore(app);
