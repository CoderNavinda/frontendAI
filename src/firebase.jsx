import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAZJqBzNDRQngStP-yABTWh5SOdGCDdKzI",
  authDomain: "tumoridsys.firebaseapp.com",
  projectId: "tumoridsys",
  storageBucket: "tumoridsys.appspot.com",
  messagingSenderId: "287430774176",
  appId: "1:287430774176:web:da75241dc330c8272ca8c5",
  measurementId: "G-P3SG88XMN7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


export {firebaseApp};