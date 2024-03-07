<template>
  <main class="home-page">
    <h1>BuyPc</h1>
    <section class="home-page__actions">
      <ProductComponent v-if="products.length > 0" :data="products.find(product => product.id === 1)" />
      <button @click="onShopClick">All Products</button>
    </section>
  </main>
</template>

<script setup>


import { useRouter } from "vue-router";

import { useProductStore } from "../utils/product-store";

import ProductComponent from "../components/ProductComponent.vue";
import { onMounted, onUnmounted } from "vue";
let timer = null;
const router = useRouter();

const productStore = useProductStore();

const products = productStore.products;

onMounted(() => {
  console.log('Home Page has mounted');
});

onUnmounted(() => {
  console.log('Home Page is unmounted');
});


const onShopClick = () => {
  console.log("onShopClick");
  router.push("/shop");
};


</script>

<style scoped lang="scss">
.home-page h1 {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.home-page__actions {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

button {
  margin: 50px auto;
}

.product_card_component {
  border-radius: 20px;
  border: solid rgb(183, 179, 189);
  padding: 19px;
  width: 33%;
  margin: auto;
  margin-top: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.name {
  h1 {
    margin-top: 10px !important;
  }
}
</style>
