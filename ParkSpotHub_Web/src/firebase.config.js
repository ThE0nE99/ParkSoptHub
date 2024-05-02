// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBniiS-jsvrfT8EtZui_wKCwlBLhwz_IYI",
  authDomain: "parking-point-5c8d7.firebaseapp.com",
  databaseURL: "https://parking-point-5c8d7-default-rtdb.firebaseio.com",
  projectId: "parking-point-5c8d7",
  storageBucket: "parking-point-5c8d7.appspot.com",
  messagingSenderId: "377561026961",
  appId: "1:377561026961:web:062603600e3aaefbc2ca30"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default  appFirebase;