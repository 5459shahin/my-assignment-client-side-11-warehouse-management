// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlNq8A-6hv7FPIijEzpKMl7Zh9gUdANoE",
  authDomain: "my-assignmrnt-11.firebaseapp.com",
  projectId: "my-assignmrnt-11",
  storageBucket: "my-assignmrnt-11.appspot.com",
  messagingSenderId: "866880548328",
  appId: "1:866880548328:web:1b948c286350afe69a485d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;