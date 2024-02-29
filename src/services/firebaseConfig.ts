// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7iNdakhpvwVO9zj17bCkU3svOWgBCKqQ",
  authDomain: "taskify-f14e4.firebaseapp.com",
  projectId: "taskify-f14e4",
  storageBucket: "taskify-f14e4.appspot.com",
  messagingSenderId: "671740710515",
  appId: "1:671740710515:web:8381df70cd2dbd1f892406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and get a reference to the service
export const auth = getAuth(app);
