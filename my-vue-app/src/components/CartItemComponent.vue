<template>
    <article class="cart-item">

        <figure class="cart-item__figure">
            <img :src="cartItem.product.url" :alt="cartItem.product.name">

        </figure>
        <div class="cartinfo">
            <h3>{{ cartItem.product.name }}</h3>
            <h3>$ {{ cartItem.product.price }}</h3>
        </div>
        <section class="cart-item__info">

            <img src="../assets/minus-sign.png" alt="" @click="onMinusClick(cartItem.product)"
                class="cart-item__minus-icon" />
            <span>{{ cartItem.quantity }}</span>
            <img src="../assets/plus.png" alt="" @click="onPlusClick(cartItem.product)" class="cart-item__plus-icon" />
        </section>
    </article>
</template>



<script setup>


import { removeFromCart, addToCart } from "../utils/cart"


defineProps({

    data: Object,

    cartItem: {

        type: Object,
        default: null,
    },
});

const onMinusClick = (prod) => {
    removeFromCart(prod)
}

const onPlusClick = (prod) => {
    addToCart(prod)
}

</script>

<style>
.cart-item__plus-icon,
.cart-item__minus-icon {
    cursor: pointer;
    width: 15%;
    margin: 0px 10px;
    height: fit-content;
    filter: invert(100);
}

.cart-item__info {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 15%;
}
</style>