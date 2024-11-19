// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL64cYejj18-gIEQgsXClHKnAU9KP8l4s",
  authDomain: "fooddeldeploy.firebaseapp.com",
  projectId: "fooddeldeploy",
  storageBucket: "fooddeldeploy.firebasestorage.app",
  messagingSenderId: "592391529880",
  appId: "1:592391529880:web:40517a62499af5bc4737ed",
  measurementId: "G-DWWRFZGELS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);