// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ZVFnJe-OAjpKI9SCe4yWf35JYVTCYX8",
  authDomain: "plantiot-otplogin.firebaseapp.com",
  projectId: "plantiot-otplogin",
  storageBucket: "plantiot-otplogin.appspot.com",
  messagingSenderId: "852312484386",
  appId: "1:852312484386:web:c3bee1f542c3cd5abab87b"
};

const app = initializeApp(firebaseConfig, 'otp-login-app');
export const auth = getAuth(app);
