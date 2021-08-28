import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyClQKktIh2WbmUtIWGJCJ4e2Yz_dv8M7bo',
  authDomain: 'covidcare-ytu-c46c1.firebaseapp.com',
  databaseURL:
    'https://covidcare-ytu-c46c1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'covidcare-ytu-c46c1',
  storageBucket: 'covidcare-ytu-c46c1.appspot.com',
  messagingSenderId: '96007050537',
  appId: '1:96007050537:web:d5e069e4927599ae831338',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth(firebaseApp)

export { db, auth }
