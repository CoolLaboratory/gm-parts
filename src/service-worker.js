/// <reference lib="WebWorker" />

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth";
import { build, files, prerendered, version } from '$service-worker';
import { authProcessor } from "$lib/utils/serviceWorkerss";


// Initialize the Firebase app in the service worker script.
const firebaseConfig = {
  apiKey: "AIzaSyDt1BMJvY6hcfa_wCUYAPNICZLCCs3QXsQ",
  authDomain: "gm-parts-app.firebaseapp.com",
  projectId: "gm-parts-app",
  storageBucket: "gm-parts-app.appspot.com",
  messagingSenderId: "158168894378",
  appId: "1:158168894378:web:cef138e7fb8135944fb9d3",
  measurementId: "G-MRLX5GRYLN"
};
const app = initializeApp(firebaseConfig);

/**
 * Returns a promise that resolves with an ID token if available.
 * 
 * @return {!Promise<?string>} The promise that resolves with an ID token if
 *     available. Otherwise, the promise resolves with null.
 */
const getIdTokenPromise = () => {
  return new Promise((resolve) => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        getIdToken(user).then(
          (idToken) => resolve(idToken), 
          (error)   => resolve(null));
      } else {
        resolve(null);
      }
    });
  });
};




self.addEventListener('fetch', async (event) => {
  /** @type {FetchEvent} */
  const evt = event;
  const authorize = authProcessor(evt.request)

  
  // Fetch the resource after checking for the ID token.
  // This can also be integrated with existing logic to serve cached files
  // in offline mode.
  const idToken = await getIdTokenPromise()

  evt.respondWith(authorize(idToken));
});