// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIKJzIK6mBH_zu4ILRkwGdYSBtoGQBWT4",
  authDomain: "quora-clone-edd20.firebaseapp.com",
  projectId: "quora-clone-edd20",
  storageBucket: "quora-clone-edd20.appspot.com",
  messagingSenderId: "845494269022",
  appId: "1:845494269022:web:874e633d70b15c787db0cf",
  measurementId: "G-37MJTGRVQE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export {auth, provider}

export default db;

