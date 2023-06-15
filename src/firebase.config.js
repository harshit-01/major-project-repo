// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb81jxOUFj95A6nFrmfWccpWXEnsR7iHI",
  authDomain: "plantiot-otp-cd12e.firebaseapp.com",
  projectId: "plantiot-otp-cd12e",
  storageBucket: "plantiot-otp-cd12e.appspot.com",
  messagingSenderId: "705909423904",
  appId: "1:705909423904:web:ad8c7cad44e7a1558a2145"
};

const app = initializeApp(firebaseConfig, 'otp-login-app');
export const auth = getAuth(app);
