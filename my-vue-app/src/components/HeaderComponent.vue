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
                </li>

                <li>
                    <a text="Login" @click="onLoginClick" />
                </li>

                <li>
                    <a text="Sign-Up" @click="onSignUpClick" />
                </li>
            </ul>
        </nav>
    </header>
    <hr>
</template>


<script setup>
import { cartGetter, cartLength } from "../utils/cart";
import { useRouter } from "vue-router";

const router = useRouter();

const onShopClick = () => {
    console.log("onShopClick");
    router.push("/shop");
};

const onCartClick = () => {
    console.log("onCartClick");
    router.push("/cart");
}
const onLoginClick = () => {
    console.log("onLoginClick");
    router.push("/Login");
}

const onSignUpClick = () => {
    console.log("onSignUpClick");
    router.push("/SignUp");
}
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