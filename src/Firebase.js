import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABtJJkZ2VZPeRrEanAjhM_xZ7nyiBx8Rk",
    authDomain: "my-meeting-planner.firebaseapp.com",
    databaseURL: "https://my-meeting-planner.firebaseio.com",
    projectId: "my-meeting-planner",
    storageBucket: "my-meeting-planner.appspot.com",
    messagingSenderId: "466909527100",
    appId: "1:466909527100:web:6782cc8d6a85b3ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;