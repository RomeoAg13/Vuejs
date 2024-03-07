
// appel de l'api FIREBASE pour le login et le register

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIb_MEfXr1mLl8kOypz78GINyr9rMeOY4",

  authDomain: "blancket-cc67d.firebaseapp.com",

  projectId: "blancket-cc67d",

  storageBucket: "blancket-cc67d.appspot.com",

  messagingSenderId: "1008647471676",

  appId: "1:1008647471676:web:593161f0f24df1c4a9b939",

  measurementId: "G-FTLCR3SZ1B"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
