


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


import { onMounted, onUnmounted } from "vue";
import ProductComponent from "../components/ProductComponent.vue";
import { setNewMessage, setContent } from "../stores/message-store";
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/product-store";



const router = useRouter();

const productStore = useProductStore();

const products = productStore.productsGetter;
let timer = null;
onMounted(() => {
    console.log('Shop Page has mounted')
    setNewMessage({ title: 'Shop Page : ', type: 'positive', content: 'Here our Shop ! Enjoy !!' })
    timer = setTimeout(() => {
        setContent('');
    }, 3000)
})

onUnmounted(() => {
    setNewMessage({ title: '', type: '', content: '' })
    clearTimeout(timer);
})

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