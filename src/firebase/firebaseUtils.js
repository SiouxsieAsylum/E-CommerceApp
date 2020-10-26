import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// public API key will likely trigger GitGuardian but it is not a risk.
//  ************** CONFIGURE AND INITIALIZE **************
const config = {
    apiKey: "AIzaSyCsQBuE-1kkX2rJMBvv89zqFS6VN1agtW0",
    authDomain: "e-commerce-app-crmc.firebaseapp.com",
    databaseURL: "https://e-commerce-app-crmc.firebaseio.com",
    projectId: "e-commerce-app-crmc",
    storageBucket: "e-commerce-app-crmc.appspot.com",
    messagingSenderId: "972808933408",
    appId: "1:972808933408:web:f06543be157a5ba50aac45"
  };

firebase.initializeApp(config);

//  ************** EXPORTS **************
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// ************** SIGN IN WITH GOOGLE **************
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfile = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`user/${user.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { email, displayName } = user;
    const createdAt = new Date();
    console.log(user, additionalData)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.error(err)
    }

  }
  return userRef;
}

export default firebase;