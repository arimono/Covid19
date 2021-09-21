import { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3zkDAKe3TDpnKouelQWqY_5Y3UEuo0UA",
  authDomain: "covidcare-ytu-clinic.firebaseapp.com",
  projectId: "covidcare-ytu-clinic",
  storageBucket: "covidcare-ytu-clinic.appspot.com",
  messagingSenderId: "528092120952",
  appId: "1:528092120952:web:773f89a9d28fce58f42a8d",
  measurementId: "G-6P6G68MKG4",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
connectFirestoreEmulator(db, "localhost", 8081)

const auth = getAuth(firebaseApp)
connectAuthEmulator(auth, "http://localhost:9099")

export { db, auth }
