


<template>
  <main class="home-page">
    <h1>BuyPc</h1>
    <section class="home-page__actions">
      <section v-if="products && products.length > 0" class="products-container">
        <ProductComponent :data="products[0]" />
      </section>
      <button @click="onShopClick">All Products</button>
    </section>
  </main>
</template>




<script setup>


//import 
import ProductComponent from "../components/ProductComponent.vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/product-store";



const router = useRouter();
const productStore = useProductStore();


const onShopClick = () => {
  console.log("onShopClick");
  router.push("/shop");
};


const products = productStore.productsGetter;
</script>





<style scoped lang ="scss">
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
  border: solid rgb(101, 5, 255);
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
