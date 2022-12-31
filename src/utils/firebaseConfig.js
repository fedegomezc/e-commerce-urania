// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrGfGM7SVcLd_30TzzL62ytVg_dNxuDNQ",
  authDomain: "ceramicas-ecommerce.firebaseapp.com",
  projectId: "ceramicas-ecommerce",
  storageBucket: "ceramicas-ecommerce.appspot.com",
  messagingSenderId: "490331936806",
  appId: "1:490331936806:web:fae206c0b77225fc312ee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);