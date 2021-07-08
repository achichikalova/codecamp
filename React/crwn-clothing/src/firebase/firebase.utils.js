import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-kzuGVmlJ8jY1PgxZQ5d8SvaqLfJYuJw",
    authDomain: "crwn-db-1acaa.firebaseapp.com",
    projectId: "crwn-db-1acaa",
    storageBucket: "crwn-db-1acaa.appspot.com",
    messagingSenderId: "579399205199",
    appId: "1:579399205199:web:443d0b7ca82c3d9ffec53a",
    measurementId: "G-LX3FL0DECR"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //we want to triger google pop up evrytime we use google auth provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;