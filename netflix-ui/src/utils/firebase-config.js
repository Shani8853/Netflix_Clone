import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Jz8eYiTGDHeno6s_E_3hnjZHeSjyAxA",
  authDomain: "react-netflix-clone-fe573.firebaseapp.com",
  projectId: "react-netflix-clone-fe573",
  storageBucket: "react-netflix-clone-fe573.appspot.com",
  messagingSenderId: "933676838094",
  appId: "1:933676838094:web:5989c582cbecd1e301b49f",
  measurementId: "G-HHYLYGED94",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
