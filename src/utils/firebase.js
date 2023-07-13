// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75sQ5B19QUE9CLZGGDPJ93kFLLkvBpRw",
  authDomain: "shad-chat-23c47.firebaseapp.com",
  projectId: "shad-chat-23c47",
  storageBucket: "shad-chat-23c47.appspot.com",
  messagingSenderId: "762173420259",
  appId: "1:762173420259:web:b3a92f1ddee19c9f368bd6",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider()

export {db, auth, storage, provider}
