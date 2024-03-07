import { ref, onBeforeMount } from "vue";

export const useProductStore = () => {
    const products = ref([]);

    onBeforeMount(async () => {
        try {
            const localStorageData = localStorage.getItem('product');
            if (localStorageData) {
                products.value = JSON.parse(localStorageData);
            } else {
                const response = await fetch('/src/database/products.json');
                products.value = await response.json();
                localStorage.setItem('product', JSON.stringify(products.value));
                
            }
        } catch (error) {
            console.error('Error', error);
        }
    });

    return { products };
};
