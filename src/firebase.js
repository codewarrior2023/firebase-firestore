import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCchA5wRD_wOf8-mQ-N7gWwbLRvqByGgBQ",
    authDomain: "fir-firestore-5f91b.firebaseapp.com",
    projectId: "fir-firestore-5f91b",
    storageBucket: "fir-firestore-5f91b.appspot.com",
    messagingSenderId: "188880637581",
    appId: "1:188880637581:web:ef99ee8d55ec0014761cc4"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);