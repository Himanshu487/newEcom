// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFpL0UWuoPtfGuTHTk-EmlDhLOUhA1Wk4",
  authDomain: "realestatedb-dfb60.firebaseapp.com",
  projectId: "realestatedb-dfb60",
  storageBucket: "realestatedb-dfb60.appspot.com",
  messagingSenderId: "113694643917",
  appId: "1:113694643917:web:db1d343919b2826edcfb84",
  databaseURL:"https://realestatedb-dfb60-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);