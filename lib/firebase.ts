// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_Firebase_API_Key,
  authDomain: process.env.NEXT_PUBLIC_Firebase_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Firebase_Project_ID,
  storageBucket: process.env.NEXT_PUBLIC_Firebase_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Firebase_Messaging_Sender_ID,
  appId: process.env.NEXT_PUBLIC_Firebase_App_ID,
  measurementId: process.env.NEXT_PUBLIC_Firebase_Measurement_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
