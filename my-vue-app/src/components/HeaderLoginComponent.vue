<template>
    <header class="app-header">
        <figure>
            <a href="/">
                <img src="../assets/computer-case.png" alt="logo de BuyPc">
            </a>
        </figure>
        <nav>
            <ul>
                <li>
                    <a text="Shop" @click="onShopClick" />
                </li>
                <li>
                    <a text="Cart" @click="onCartClick" />
                    <small class="cart-length-icon" v-if="cartLength() > 0">{{ cartLength() }}</small>
                    <!-- if la longueur est > 0 c'est ok  ensuite ca va afficher la longueur, donc le nombre d'article dans le cart-->
                </li>

                <li>
                    <a @click="logout">Logout</a>
                </li>
            </ul>
        </nav>
    </header>
    <hr>
</template>

<script setup>
import { cartLength } from "../utils/cart";

import { useRouter } from "vue-router";

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(); // recupere auth depuis le firebase

const router = useRouter(); // recupere instance du router


// envoyer vers le /shop
const onShopClick = () => {
    console.log("onShopClick");
    router.push("/shop");
};

//envoyer vers le /cart
const onCartClick = () => {
    console.log("onCartClick");
    router.push("/cart");
};

// envoyer vers le /login
const onLoginClick = () => {
    console.log("onLoginClick");
    router.push("/login");
};

// envoyer vers le /signup
const onSignUpClick = () => {
    console.log("onSignUpClick");
    router.push("/signup");
};

// Fonction pour le logout
const logout = async () => {
    try {
        await signOut(auth); // Appel de la fonction signOut pour déconnecter l'utilisateur
        console.log("Déconnexion réussie");
        router.push("/login"); // envoyer  l'user vers la page de connexion après logout
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
    }
};








</script>


<style scoped lang="scss">
header {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

header img {
    width: 10%;
}


header nav {
    width: 20%;
    display: flex;
    align-items: center;
}



header ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}


a {
    color: white;
}

a:hover {
    color: #7e7e7e;
}

hr {
    margin: 0;
}


.cart-length-icon {
    position: absolute;
    top: 20px;
    font-weight: bold;
    color: white;
    background-color: #0058ff;
    margin-left: 3px;
    padding: 3px;
    border-radius: 8px;
}
</style>