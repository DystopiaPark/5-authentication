// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmf7VkSRXyw5jM_iFjfepD-7m5TANYe2A",
  authDomain: "fir-auth-1083f.firebaseapp.com",
  projectId: "fir-auth-1083f",
  storageBucket: "fir-auth-1083f.appspot.com",
  messagingSenderId: "2330365001",
  appId: "1:2330365001:web:f96e107bde32bbc733c398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
