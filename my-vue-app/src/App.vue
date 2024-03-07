<template>
  <HeaderComponent />

  <router-view v-slot="{ Component, route }">

  </router-view>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue"
</script>