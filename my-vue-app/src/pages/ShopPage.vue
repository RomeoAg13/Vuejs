<template>
    <main class="shop">
        <div class="shop-page">
            <h1>Our Shop : </h1>
        </div>

        <section v-if="products" class="products-shop">
            <ProductComponent v-for="(product, index) in products" :key="index" :data="product" />
        </section>
    </main>
</template>



<script setup>
import ProductComponent from "../components/ProductComponent.vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../utils/product-store";
import { onMounted, onUnmounted } from "vue";
const router = useRouter();
const productStore = useProductStore();
const products = productStore.products;
let timer = null;
onMounted(() => { // quand c'est ajoute dans le dom
    console.log('Shop Page has mounted');
});

onUnmounted(() => { // quand c'est retire du dom
    console.log('Shop Page is unmounted');
});
</script>


<style>
.products-shop {
    width: 80%;
    display: flex;
    flex-direction: unset;
    flex-wrap: wrap;
    margin: auto;
    margin-top: auto;
    margin-top: 50px;
    justify-content: center;
}

.product_card_component {
    display: flex;
    align-items: center;
    border: solid white;
    border-radius: 20px;
    margin: 20px;
    width: 60%;
}
</style>