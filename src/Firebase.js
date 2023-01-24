// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ZhQxbS85-0iEJU2aMCsWZ95e6-V07d0",
  authDomain: "tiny-post-c9fdc.firebaseapp.com",
  projectId: "tiny-post-c9fdc",
  storageBucket: "tiny-post-c9fdc.appspot.com",
  messagingSenderId: "94832510718",
  appId: "1:94832510718:web:8602f810c3266fca9987af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
