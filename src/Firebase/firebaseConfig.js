import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConf = {
    apiKey: "AIzaSyCFY1bXxgtanobfuXVDdMzDeBzEHpfaB3w",
    authDomain: "loleiporahi-73a8b.firebaseapp.com",
    databaseURL: "https://loleiporahi-73a8b.firebaseio.com",
    projectId: "loleiporahi-73a8b",
    storageBucket: "loleiporahi-73a8b.appspot.com",
    messagingSenderId: "618067101425",
    appId: "1:618067101425:web:d69f2ff6c163b0daddcb50",
    measurementId: "G-SMP4L1FL4F"
};
// Initialize Firebase
const firebaseConfig = firebase.initializeApp(firebaseConf);
export default firebaseConfig