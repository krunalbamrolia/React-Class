// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDezB8GQf3pmU_7CyErVlxL-qN8wwZbOWU",
  authDomain: "testing-fire-crud.firebaseapp.com",
  projectId: "testing-fire-crud",
  storageBucket: "testing-fire-crud.appspot.com",
  messagingSenderId: "179233740358",
  appId: "1:179233740358:web:c7275a9a003cc693fc9c47",
  measurementId: "G-VLMP2X4Y42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };


