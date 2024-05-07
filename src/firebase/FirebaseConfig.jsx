// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNS25sdZJVBzQPcrQMYStVmYqgAdREhXo",
  authDomain: "myecom-7a354.firebaseapp.com",
  projectId: "myecom-7a354",
  storageBucket: "myecom-7a354.appspot.com",
  messagingSenderId: "345946703510",
  appId: "1:345946703510:web:3c1880d66daa05a8e924b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);


const auth = getAuth(app);

export { fireDB, auth };