// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// //my generated key by email: hiteshrtk999@gmail.com

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCNS25sdZJVBzQPcrQMYStVmYqgAdREhXo",
//   authDomain: "myecom-7a354.firebaseapp.com",
//   projectId: "myecom-7a354",
//   storageBucket: "myecom-7a354.appspot.com",
//   messagingSenderId: "345946703510",
//   appId: "1:345946703510:web:79fa30d9e3efe2d0e924b7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDBHTUtOeuCON7AEF3UPPxU1sHsnFfBv-M",
  authDomain: "ecommerce-for.firebaseapp.com",
  projectId: "ecommerce-for",
  storageBucket: "ecommerce-for.appspot.com",
  messagingSenderId: "609664686595",
  appId: "1:609664686595:web:302bf25cc8efa64a4e4c36"
};

//my generated key by email: hk9991482622@gmail.com

// const firebaseConfig = {
//   apiKey: "AIzaSyDze6FRqkWMlRL7m_cJU0xszSJIzdUWrkU",
//   authDomain: "myecom2-a88ad.firebaseapp.com",
//   projectId: "myecom2-a88ad",
//   storageBucket: "myecom2-a88ad.appspot.com",
//   messagingSenderId: "466922764493",
//   appId: "1:466922764493:web:ced86634bc4009ebc85184"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);


const auth = getAuth(app);

export { fireDB, auth };