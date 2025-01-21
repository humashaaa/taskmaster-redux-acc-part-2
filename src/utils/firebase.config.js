// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBadX4OsVdvbgXjIBooXDYW570389_IHk",
  authDomain: "redux-practice-90681.firebaseapp.com",
  projectId: "redux-practice-90681",
  storageBucket: "redux-practice-90681.firebasestorage.app",
  messagingSenderId: "192568545678",
  appId: "1:192568545678:web:b985a46470b0d38a5314df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth