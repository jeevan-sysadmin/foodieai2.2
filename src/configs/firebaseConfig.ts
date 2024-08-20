// firebaseConfig.ts
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {

  apiKey: "AIzaSyAH587uvB4T8KKX1lJILBWZMp-g2zAGHtw",

  authDomain: "foodieai-cd048.firebaseapp.com",

  projectId: "foodieai-cd048",

  storageBucket: "foodieai-cd048.appspot.com",

  messagingSenderId: "109197592526",

  appId: "1:109197592526:web:260e48f389721522b88d9f"

}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
