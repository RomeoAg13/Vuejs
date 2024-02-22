import { ref, computed, watch, onBeforeMount } from "vue";

export const useProductStore = () => {
    const products = ref([]);
    const backupProducts = ref([]);

    const productsGetter = computed(() => products.value);

    onBeforeMount(async () => {
        try {
            const localStorageData = localStorage.getItem('productState');
            if (localStorageData) {
                backupProducts.value = JSON.parse(localStorageData);
            } else {
                const response = await fetch('/src/database/products.json');
                const data = await response.json();
                backupProducts.value = data;
                localStorage.setItem('productState', JSON.stringify(data));
            }
        } catch (error) {
            console.error('Error while initializing product store:', error);
        }
    });

    const $reset = () => {
        products.value = [];
    };

    const getProducts = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL_PRODUCTS);
            products.value = await response.json();
        } catch (error) {
            console.error('Failed :', error);
        }
    };

    watch(backupProducts, (val) => {
        if (!products.value.length) {
            products.value = val;
        }
    });

    watch(
        products,
        (val) => {
            if (val.length) {
                localStorage.setItem('productState', JSON.stringify(val));
            }
        },
        { deep: true }
    );

    return { productsGetter, getProducts, $reset };
};
