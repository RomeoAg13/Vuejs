<template>
    <article class="product_card_component">
        <img :src="data.url" :alt="data.name">
        <div class="name">
            <h1>{{ data.name }}</h1>
            <div class="shopinfo">
                <h3>$ {{ data.price }} </h3>
                <h4>Quantity : {{ data.quantity }}</h4>
            </div>
        </div>
        <section class="product-card-component__actions">
            <img src="../assets/shopping-cart.png" alt="cart" id="CartIcon" @click='onAddCartClick(data)'>
        </section>
    </article>
</template>


<script setup>
import { addToCart } from '../utils/cart'

// define les props que l'on souhaite
defineProps({
    data: Object // object qui contient les donnees du produit
})

// add to le cart
const onAddCartClick = (product) => {
    console.log('item added');
    addToCart(product);
}
</script>


<style scoped lang="scss">
.name {
    display: flex;
    width: 70%;
    flex-wrap: wrap;
}

.name h1 {
    margin-top: 0 !important;
}

.shopinfo h3 {
    color: rgb(14, 163, 26);
    margin: 0;
    font-size: 30px;
    display: flex;
    justify-content: center;
}

.shopinfo h4 {
    display: flex;
    justify-content: end;
}

.product_card_component img {
    width: 25%;
    margin: 20px;
    border-radius: 10px;


}

.shopinfo {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
}

.product-card-component__actions {
    width: 10%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    background-color: #73c0de;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

#CartIcon {
    width: 50%;
}
</style>