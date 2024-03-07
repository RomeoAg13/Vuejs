User
<template>
    <main class="shop">
        <div class="shop-page">
            <h1>Your Cart : </h1>
        </div>
        <CartItemComponent v-for="(item, index) in cartItems" :key="index" :cart-item="item" />
        <h1>Total : $ {{ cartPrice() }}</h1>
    </main>
    <section v-if="!cartItems.length" class="cart-page__no-items">
        <p>You don't have any products</p>
        <router-link to="/shop">
            Our Products !
        </router-link>
    </section>
</template>


<script setup>
import { cartGetter } from "../utils/cart";
import { cartPrice } from "../utils/cart";
import CartItemComponent from '../components/CartItemComponent.vue';

const cartItems = cartGetter();
</script>

<style>
.cart-page__no-items {
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 50px auto;
    background-color: transparent;
    border-radius: 15px;
    height: 69vh;
    border: solid white;
    justify-content: center;
}

.cart-item__figure {
    width: 30%;
}

.cart-item__figure img {
    width: 100%;
}

.cart-item {
    width: 30%;
    display: flex;
    margin: 50px auto;
    background-color: transparent;
    border-radius: 15px;
    height: 24vh;
    border: solid white;
    justify-content: space-around;
    align-items: center;
}
</style>