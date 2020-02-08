import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "katsuomi-net.firebaseapp.com",
  databaseURL: "https://katsuomi-net.firebaseio.com",
  projectId: "katsuomi-net",
  storageBucket: "katsuomi-net.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
