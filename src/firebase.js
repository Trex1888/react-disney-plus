import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDo8bKYdyZQTCgik1GeHBro2T770WfC_C0",
  authDomain: "disney-react-59c43.firebaseapp.com",
  projectId: "disney-react-59c43",
  storageBucket: "disney-react-59c43.appspot.com",
  messagingSenderId: "258806016069",
  appId: "1:258806016069:web:1d08e9ce2b73c0618d5b2c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
