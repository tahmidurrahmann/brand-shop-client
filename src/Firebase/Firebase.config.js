// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmK8EoT4qtW7h7bMgjPZm2_2D2d9FEB3U",
  authDomain: "dream-tech-client.firebaseapp.com",
  projectId: "dream-tech-client",
  storageBucket: "dream-tech-client.appspot.com",
  messagingSenderId: "268355255505",
  appId: "1:268355255505:web:fee38c6c9046f2fe5a19f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;