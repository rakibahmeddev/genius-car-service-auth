// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7j5PkMtaJqBiiBwWMdyXlWqoWrG3HXfY",
  authDomain: "car-servicing-dbb61.firebaseapp.com",
  projectId: "car-servicing-dbb61",
  storageBucket: "car-servicing-dbb61.appspot.com",
  messagingSenderId: "1089470394907",
  appId: "1:1089470394907:web:e2dfa374491d2779aa7ebe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
