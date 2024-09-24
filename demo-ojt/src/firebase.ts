//Note Importannt functions for firebase sdk
import { initializeApp } from "firebase/app";
//Additional Firebase Products
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//Firebase Configuration Dont modify
const firebaseConfig = {
  apiKey: "AIzaSyD3v-1slarNFx9zCdeuUa8ZBr-5JOTx_FA",
  authDomain: "fir-3c360.firebaseapp.com",
  projectId: "fir-3c360",
  storageBucket: "fir-3c360.appspot.com",
  messagingSenderId: "50309613018",
  appId: "1:50309613018:web:04b10354b8014434166ce3",
  measurementId: "G-E5FZ27K9DR"
};

//Initalize the firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
