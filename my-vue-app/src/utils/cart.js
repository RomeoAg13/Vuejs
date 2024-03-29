import { ref } from 'vue';

const state = ref({
    cart: []
});

const cartGetter = () => state.value.cart;


// nombre d'article dans le panier
const cartLength = () => state.value.cart.length;



// calcul le prix total
const cartPrice = () => {
    let totalPrice = 0;
    for ( const cartProduct of cartGetter() )  {
        totalPrice += cartProduct.product.price * cartProduct.quantity;
    }
    return totalPrice;
};

// if recupere les donnees du panier depuis le localStorage, deja present dans chaque const

if (localStorage.getItem('cartState')) {  // recupere les donnees du panier 
    const cartState = localStorage.getItem('cartState'); // si donnees existent alors associe a cartState
    try {
        state.value.cart = JSON.parse(cartState);  //ensuite le code try de convertir en objet 
    } catch (error) {
        console.error('Error parsing cart state from localStorage:', error);
        // Handle the error appropriately, possibly by resetting the cart
    }
}

// const qui permet d'ajouter dans le panier
const addToCart = (product) => {
    const existingProductIndex = state.value.cart.findIndex(cartProd => cartProd.product.id === product.id);

    if (existingProductIndex !== -1) {
        // Si le produit existe déjà dans le panier, +1
        state.value.cart[existingProductIndex].quantity++;
    } else {
        // Sinon,ajouter au panier
        state.value.cart.push({ product, quantity: 1 });
    }

    // maj du local storage
    localStorage.setItem('cartState', JSON.stringify(state.value.cart));
};

const removeFromCart = (product) => {
    const cartProductIndex = state.value.cart.findIndex(cartProd => cartProd.product.id === product.id);

    if (cartProductIndex !== -1) {
        const cartProduct = state.value.cart[cartProductIndex];
        cartProduct.quantity--;

        if (cartProduct.quantity === 0) {

            // Si quantité atteint 0, splice l'article du cart
            state.value.cart.splice(cartProductIndex, 1);
        }

        // maj du localStorage, donc du panier
        localStorage.setItem('cartState', JSON.stringify(state.value.cart));
    } else {
        console.log('Product does not exist in the cart.');
    }
};


export {
    state,
    cartGetter,
    addToCart,
    removeFromCart,
    cartLength,
    cartPrice
};
