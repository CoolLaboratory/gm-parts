import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";
// import { initializeAnalytics } from "firebase/analytics";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDt1BMJvY6hcfa_wCUYAPNICZLCCs3QXsQ",
  authDomain: "gm-parts-app.firebaseapp.com",
  projectId: "gm-parts-app",
  storageBucket: "gm-parts-app.appspot.com",
  messagingSenderId: "158168894378",
  appId: "1:158168894378:web:cef138e7fb8135944fb9d3",
  measurementId: "G-MRLX5GRYLN"
};

export default function getClientApp() {

  if(getApps().length) return getApp()

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  setPersistence(auth, inMemoryPersistence)

  return app
}





