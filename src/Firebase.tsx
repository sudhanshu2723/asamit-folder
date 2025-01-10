import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWx7WIZ-53TOZt-eaxxR_wzLtSQNzOR4U",
  authDomain: "newportfolio-efc96.firebaseapp.com",
  projectId: "newportfolio-efc96",
  storageBucket: "newportfolio-efc96.firebasestorage.app",
  messagingSenderId: "32296320219",
  appId: "1:32296320219:web:58a9927c8d7d9721d420fe",
  measurementId: "G-MZB6K6HY8Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);