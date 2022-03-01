// import firebase from 'firebase';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzv6GqeCASwdQs0m0AKplEOSTSZ17PIpA",
  authDomain: "sourav-clone.firebaseapp.com",
  projectId: "sourav-clone",
  storageBucket: "sourav-clone.appspot.com",
  messagingSenderId: "1057371798135",
  appId: "1:1057371798135:web:52e6568bb8cb2364d82472",
  measurementId: "G-TEPNQX6PRY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };