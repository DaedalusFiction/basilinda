import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFhI3zVo-d_nrwhP4L_djciz_ANFs_PWA",
    authDomain: "basilinda-e5ec0.firebaseapp.com",
    projectId: "basilinda-e5ec0",
    storageBucket: "basilinda-e5ec0.appspot.com",
    messagingSenderId: "288039730040",
    appId: "1:288039730040:web:235b5bdf4ae1d16676a68d",
    measurementId: "G-FV3419R6DP",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
