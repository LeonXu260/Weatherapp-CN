import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "weatherapp-cn.firebaseapp.com",
  projectId: "weatherapp-cn",
  storageBucket: "weatherapp-cn.appspot.com",
  messagingSenderId: "755459847225",
  appId: "1:755459847225:web:1248c7d8654336d02ac9e8",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
