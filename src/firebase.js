import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQU5GOaxf2DwsU1uiVrK_6FnEXSDjSnzQ",
  authDomain: "instagram-clone-react-5e558.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-5e558.firebaseio.com",
  projectId: "instagram-clone-react-5e558",
  storageBucket: "instagram-clone-react-5e558.appspot.com",
  messagingSenderId: "890152950633",
  appId: "1:890152950633:web:3a7932263d28c13b03bbf8",
  measurementId: "G-LVEKXCS53X",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
