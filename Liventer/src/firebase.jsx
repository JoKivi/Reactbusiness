// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9uTosKe2AHo9Q94Bx8QoKPImWODhoIsg",
  authDomain: "liventer-website.firebaseapp.com",
  projectId: "liventer-website",
  storageBucket: "liventer-website.appspot.com",
  messagingSenderId: "936592128089",
  appId: "1:936592128089:web:7bdcbbec1cda060163d948",
  measurementId: "G-RW1XGRJ0K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)