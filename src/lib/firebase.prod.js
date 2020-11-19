import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDQo94CiBtJP37IRDUbi3aECgI5nRnnLG0",
  authDomain: "netflix-2198f.firebaseapp.com",
  databaseURL: "https://netflix-2198f.firebaseio.com",
  projectId: "netflix-2198f",
  storageBucket: "netflix-2198f.appspot.com",
  messagingSenderId: "622000514525",
  appId: "1:622000514525:web:f7147e733cd12cfd7e0234",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
