<template>
  <HeaderComponent />

  <router-view v-slot="{ Component, route }">

  </router-view>
  <NotificationComponent />
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue"
import NotificationComponent from "./components/NotificationComponent.vue"
</script>