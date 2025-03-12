import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxShC8W9ayQtCSvEeJWJmBi5X5VawjvL8",
    authDomain: "antropotest.firebaseapp.com",
    projectId: "antropotest",
    storageBucket: "antropotest.firebasestorage.app",
    messagingSenderId: "1036456011032",
    appId: "1:1036456011032:web:c8e57f864ff77298746a6d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const dbFirestore = getFirestore();