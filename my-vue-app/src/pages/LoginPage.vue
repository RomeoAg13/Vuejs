<template>
    <div id="app" class="login-container">
        <h2>Login</h2>
        <form class="login-form" @submit.prevent="login">
            <div class="inputText">
                <input type="text" v-model="email" placeholder="Email" required>
            </div>
            <div class="inputText">
                <input type="password" v-model="password" placeholder="Password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>


<script>
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const userCreation = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log("Utilisateur connecté avec succès:", userCreation.user);
                this.$router.push('/');// envoyer user vers la home page avec le login reussit 
            } catch (error) {
                console.error("Erreur lors de la connexion:", error);
                this.errorMessage = error.message;
            }
        }
    }
}
</script>


<style>
.login-container {
    width: 25%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: auto;
    margin-top: auto;
    margin-top: 150px;
}



.login-container h2 {
    margin-bottom: 20px;
    text-align: center;
}

.inputText {
    display: flex;
    justify-content: center;
}

.login-form input {
    width: 60%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-form button {
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

.login-form button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    text-align: center;
}
</style>