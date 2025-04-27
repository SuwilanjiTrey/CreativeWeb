// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRHt8dmfxi7kELimzCVWJs7Dc1APYgems",
  authDomain: "creativew3b-83b37.firebaseapp.com",
  projectId: "creativew3b-83b37",
  storageBucket: "creativew3b-83b37.firebasestorage.app",
  messagingSenderId: "538689128523",
  appId: "1:538689128523:web:050f22176f2e28e65a65ce",
  measurementId: "G-JBQ4CW9WPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);