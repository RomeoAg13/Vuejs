<template>
    <main>
        <h1>Error 404</h1>
        <button @click='onHomeClick()'>Come Back !</button>
    </main>
</template>


<script setup>


import { useRouter } from "vue-router";
const router = useRouter();

const onHomeClick = () => {
    console.log("onHomeClick");
    router.push("/");
};


</script>

<style>
main {
    width: 100%;
}

button {
    display: flex;
    margin: 50px auto;
}
</style>