import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzAhe4GHgY9cQHrvQXVeLHOq9MFVlZf6w",
  authDomain: "ecommerce-76cb7.firebaseapp.com",
  projectId: "ecommerce-76cb7",
  storageBucket: "ecommerce-76cb7.appspot.com",
  messagingSenderId: "521337209058",
  appId: "1:521337209058:web:07380c2a68660299265ebb",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
