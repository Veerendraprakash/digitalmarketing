// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0pRHXn10JRQK5wZGcS3uYfxRSNvOPm3Y",
  authDomain: "majorproject-react.firebaseapp.com",
  projectId: "majorproject-react",
  storageBucket: "majorproject-react.appspot.com",
  messagingSenderId: "682602773107",
  appId: "1:682602773107:web:ffb72231c09fde04950806",
  measurementId: "G-0PV8MQ9F7D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
