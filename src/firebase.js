// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , setPersistence, browserLocalPersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKF5dj_Vq_ICxxpx4bRB3Tl9S8QS6bXho",
  authDomain: "minor-project-2-fa3fa.firebaseapp.com",
  projectId: "minor-project-2-fa3fa",
  storageBucket: "minor-project-2-fa3fa.appspot.com",
  messagingSenderId: "994335702601",
  appId: "1:994335702601:web:d38dec92ff750fb2b70998",
  measurementId: "G-BEP0MENJ3X"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export default app;