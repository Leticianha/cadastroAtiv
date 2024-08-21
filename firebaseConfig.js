import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Seu código de configuração do Firebase aqui
const firebaseConfig = {
    apiKey: "AIzaSyCvb3nSYrcJ_JexbkO_c6FDgrggOtAjptw",
    authDomain: "nexus-47d4e.firebaseapp.com",
    projectId: "nexus-47d4e",
    storageBucket: "nexus-47d4e.appspot.com",
    messagingSenderId: "322156513563",
    appId: "1:322156513563:web:03b262451f6325b4b1abbe",
    measurementId: "G-YKN6GSRQHS"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
