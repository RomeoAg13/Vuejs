<template>

  <component :is="currentHeader" />

  <router-view v-slot="{ Component, route }">
  </router-view>
</template>

<script setup>


//import 
import { ref } from 'vue';  // permet de creer une valeur dont la valeur peut changer au cours du projet
import HeaderComponent from "./components/HeaderComponent.vue"
import HeaderLoginComponent from "./components/HeaderLoginComponent.vue"
import { getAuth } from "firebase/auth";



const auth = getAuth(); // Récupération de l'authentification Firebase

const currentHeader = ref(HeaderComponent); // c'est une variable reactive, elle contient le composant actuel qui peut changer.

// regarde le changement d'etat du user 
auth.onAuthStateChanged((user) => {
  if (user) {
    // if user connecte alors afficher headerlogin
    currentHeader.value = HeaderLoginComponent;
  } else {
    // else afficher header non connecte
    currentHeader.value = HeaderComponent;
  }
});
</script>