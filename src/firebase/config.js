import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBQIk0ThcxwURmedt-vNm7a5XzHIsM9P9c",
  authDomain: "miniblog-84bdf.firebaseapp.com",
  projectId: "miniblog-84bdf",
  storageBucket: "miniblog-84bdf.appspot.com",
  messagingSenderId: "739829695817",
  appId: "1:739829695817:web:616f0fef218e3bdacc4698"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }