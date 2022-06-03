import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config=
    {
        apiKey: "AIzaSyAzAiD1tyRFoeLsHDk7Hep7i2NDnMnTk6c",
        authDomain: "crown-db-aaca6.firebaseapp.com",
        projectId: "crown-db-aaca6",
        storageBucket: "crown-db-aaca6.appspot.com",
        messagingSenderId: "215811817197",
        appId: "1:215811817197:web:687431a6c14fa7088cd6e4",
        measurementId: "G-PF5EL4VGNW"
      };

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'})
      export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
      export default firebase

