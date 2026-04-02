import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyGS8LyiE8t08N4eIOIoBHAAkmiU6W1t8",
  authDomain: "product-website-c3385.firebaseapp.com",
  projectId: "product-website-c3385",
  storageBucket: "product-website-c3385.firebasestorage.app",
  messagingSenderId: "76699674023",
  appId: "1:76699674023:web:ca107fc5d6969e97734282",
  measurementId: "G-2LEKS9M56S"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);