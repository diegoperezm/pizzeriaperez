import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAiYuQXDh7uoTuLZedYTNAh2qNkCVc4Db4",
  authDomain: "pizzeriaperez-bddbf.firebaseapp.com",
  projectId: "pizzeriaperez-bddbf",
  storageBucket: "pizzeriaperez-bddbf.appspot.com",
  messagingSenderId: "392535341025",
  appId: "1:392535341025:web:78908d77ec96de6ccc44a0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
