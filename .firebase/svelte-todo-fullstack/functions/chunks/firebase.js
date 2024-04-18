import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBOyg_n3Nvn7mJkwrSIm6Jl57URTrDh-P0",
  authDomain: "svelte-todo-fullstack.firebaseapp.com",
  projectId: "svelte-todo-fullstack",
  storageBucket: "svelte-todo-fullstack.appspot.com",
  messagingSenderId: "304474384073",
  appId: "1:304474384073:web:52ac0dcb617579d5494f18"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
