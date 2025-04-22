import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC42YazrWr69QzBuTnO3AZfR1F8l7CB5Q",
  authDomain: "property-76f92.firebaseapp.com",
  projectId: "property-76f92",
  storageBucket: "property-76f92.appspot.com",
  messagingSenderId: "107250287409",
  appId: "1:1072502874099:web:2922c12f6a3d80ecef3c86",
  measurementId: "G-7EB9FDP7S6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Enable persistent auth state
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Firebase persistence enabled');
  })
  .catch((error) => {
    console.error('Error enabling persistence:', error);
  });

export default app;
