import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc4IBzo-E4slsw3riRSD_07bFx7VxLa3Y",
  authDomain: "clothing-d12c0.firebaseapp.com",
  databaseURL: "https://clothing-d12c0.firebaseio.com",
  projectId: "clothing-d12c0",
  storageBucket: "clothing-d12c0.appspot.com",
  messagingSenderId: "170735405116",
  appId: "1:170735405116:web:dc3d74e95fec1fc365db39",
  measurementId: "G-GDLZQCP9FY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("errror creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
