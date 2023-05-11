// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5h8X6Dqt5LcaxN2fXsBEC0oqHC_-5WB4",
  authDomain: "printme-auth.firebaseapp.com",
  projectId: "printme-auth",
  storageBucket: "printme-auth.appspot.com",
  messagingSenderId: "43037237317",
  appId: "1:43037237317:web:a173c948d12f1d9467c32c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth