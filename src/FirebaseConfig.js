// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCfBTChMNKBrIUpyHApk5gKcg-vHRBniCo",
  authDomain: "peak-axiom-109709.firebaseapp.com",
  databaseURL: "https://peak-axiom-109709.firebaseio.com",
  projectId: "peak-axiom-109709",
  storageBucket: "peak-axiom-109709.firebasestorage.app",
  messagingSenderId: "114438926714",
  appId: "1:114438926714:web:26f9a3b9158cebf9fae6c3",
  measurementId: "G-7XDLL92FLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export default firebase;
const analytics = getAnalytics(app);
export default app;