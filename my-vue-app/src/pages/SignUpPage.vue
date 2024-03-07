<template>
    <div id="app" class="register-container">
        <h2>Register</h2>
        <form class="register-form" @submit.prevent="register">
            <div class="inputText">
                <input type="text" v-model="email" placeholder="Email" required>
            </div>
            <div class="inputText">
                <input type="password" v-model="password" placeholder="Password" required>
            </div>
            <button type="submit">Register</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../utils/firebase';
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    setup() {
        const email = ref(""); // ref pour stocker l'email
        const password = ref(""); // ref pour stocker le pwd
        const errorMessage = ref(""); // ref pour le message
        const router = useRouter();

        // inscription
        const register = () => {
            // creer user avec email et pwd
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    console.log("Register Success!!");
                    router.push('/login'); // envoyer vers le login une fois que le register est bon
                })
                .catch((error) => {
                    console.error(error.code); // sinon dans la console affichage des erreurs
                    errorMessage.value = error.message; // affichage des erreurs 
                });
        };


        return { email, password, errorMessage, register };
    }
};
</script>

<style>
.register-container {
    width: 25%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top: auto;
    margin-top: 150px;
}



.register-container h2 {
    margin-bottom: 20px;
    text-align: center;
}

.inputText {
    display: flex;
    justify-content: center;
}

.register-form input {
    width: 60%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.register-form button {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin: auto;
    display: flex;
    justify-content: center;
}

.register-form button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    text-align: center;
}
</style>