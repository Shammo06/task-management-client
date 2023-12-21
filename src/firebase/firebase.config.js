// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwDWE9ALhMH9Arqy_jHdzKOQSCjsQKqvA",
  authDomain: "task-management-caaa9.firebaseapp.com",
  projectId: "task-management-caaa9",
  storageBucket: "task-management-caaa9.appspot.com",
  messagingSenderId: "481685141115",
  appId: "1:481685141115:web:8b6d8d57634148644494de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

