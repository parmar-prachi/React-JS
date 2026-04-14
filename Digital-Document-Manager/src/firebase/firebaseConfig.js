import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyGS8LyiE8t08N4eIOIoBHAAkmiU6W1t8",
    authDomain: "product-website-c3385.firebaseapp.com",
    databaseURL: "https://product-website-c3385-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "product-website-c3385",
    storageBucket: "product-website-c3385.firebasestorage.app",
    messagingSenderId: "76699674023",
    appId: "1:76699674023:web:be9b7d476d88c431734282",
    measurementId: "G-JG96JPDMZN"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);