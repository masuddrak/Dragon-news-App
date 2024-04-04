// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZT2a_f6j-3Z-H1aXgaRkM-u41mwESYss",
  authDomain: "dragon-app-89271.firebaseapp.com",
  projectId: "dragon-app-89271",
  storageBucket: "dragon-app-89271.appspot.com",
  messagingSenderId: "259479770324",
  appId: "1:259479770324:web:c38f78929ed7d8fdccd741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
