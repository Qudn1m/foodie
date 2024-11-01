// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOTI6EmPV3yi1CGck5CnCuuD2fan0zdoI",
  authDomain: "foodie-a7407.firebaseapp.com",
  projectId: "foodie-a7407",
  storageBucket: "foodie-a7407.appspot.com",
  messagingSenderId: "876905605727",
  appId: "1:876905605727:web:680757e958b670a1e449ea",
  measurementId: "G-LWJFY2G7XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);