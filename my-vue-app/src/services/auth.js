
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebase";


import { createPinia } from 'pinia';// Import de la fonction createPinia depuis la bibliothèque Pinia



const pinia = createPinia(); // creer une instance pinia pour gerer l'etat du site



// REGISTER
export const register = async (email, password) => {
  try {

    
    const auth = getAuth(app);// AUTH A PARTIR DE FIREBASE

    
    const userCreation = await createUserWithEmailAndPassword(auth, email, password);//creer un nouveau user a partir du mail et du password fournit


   
    return userCreation.user; // return user cree.

  } catch (error) {

   
    console.error("Erreur lors de l'enregistrement:", error); // En cas d'erreur lors de l'inscription, affiche erreur dans la console
    throw error;
  }
};

// Login
export const login = async (email, password) => {
  try {

    
    const auth = getAuth(app); // AUTH A PARTIR DE FIREBASE
    
    const userCreation = await signInWithEmailAndPassword(auth, email, password);// login avec le mail et le password fournit
   
    return userCreation.user; //return user login
  } catch (error) {

    console.error("Erreur lors de la connexion:", error);// En cas d'erreur lors de la connexion, affiche erreur dans la console
    throw error;
  }
};


export default pinia;// Export Pinia
