import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCifOjhBLkml7fRZE6jCkxSVBVvgZCKsE",
  authDomain: "aka-yt-ka-black.firebaseapp.com",
  projectId: "aka-yt-ka-black",
  storageBucket: "aka-yt-ka-black.appspot.com",
  messagingSenderId: "977638786591",
  appId: "1:977638786591:web:da54fec6e003ee4436372a",
  measurementId: "G-VL2PX3LD2K",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
