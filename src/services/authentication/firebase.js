// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbHehIhK91PrGQUJPM0YBTW72ehgceSOM",
  authDomain: "digital-talent-project.firebaseapp.com",
  projectId: "digital-talent-project",
  storageBucket: "digital-talent-project.appspot.com",
  messagingSenderId: "979388816138",
  appId: "1:979388816138:web:ed69b5c7dafc2638ed78f3",
  measurementId: "G-BH57HP09PT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const registerithEmailandPassword = async (email, password) => {
  try {
    const authCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`Login dengan user : ${authCredential.user}`);
  } catch (error) {
    console.log("fullerror: " + error);
    console.log("error auth: " + error);
    console.log("error message: " + error.message);
  }
};

const loginWithEmailandPassword = (email, password) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
    });
};

const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Berhasil Keluar");
  } catch (error) {
    console.log(error);
  }
};

export { auth, loginWithEmailandPassword, registerithEmailandPassword, logOut };
