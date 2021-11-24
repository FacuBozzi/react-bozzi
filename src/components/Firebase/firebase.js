import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdXrk2EHPVXISaPtJQDniw0-dlzh2Jn6g",
  authDomain: "reactcoder-17fc7.firebaseapp.com",
  projectId: "reactcoder-17fc7",
  storageBucket: "reactcoder-17fc7.appspot.com",
  messagingSenderId: "588405796332",
  appId: "1:588405796332:web:d55017292d043d638e64c9",
  measurementId: "G-WTY3W9QW7B"
};


const firebaseApp = initializeApp({firebaseConfig});

export const db = getFirestore();