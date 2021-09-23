import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBszqQ9WOW-edlkuJfXhFTKzQcOABpXKlY",
    authDomain: "wolfmark-cs.firebaseapp.com",
    projectId: "wolfmark-cs",
    storageBucket: "wolfmark-cs.appspot.com",
    messagingSenderId: "927863780609",
    appId: "1:927863780609:web:bb8017c22d9a8ff0551700"
};
  
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)  