import {
    createStore
} from 'harlem';

const STATE = {
    cart: []

}
const {
    state, 
    getter,
    mutation,
    action,
    ...store
} = createStore('cart', STATE);

const cartGetter = getter('cart', state => state.cart);

const addToCart = action('add-cart', async (data, mutate) => {
    mutate(state => {
        try {
            localStorage.removeItem('cartState')
        } catch(e) {
            console.log('no cartState key in localStorage')
        }
      
        if(state.cart.length){
            const cartProduct = state.cart.find(cartProd => cartProd.product.id == data.id)
            if(cartProduct){
               const index = state.cart.indexOf(cartProduct)
               state.cart[index].quantity += 1
                console.log('new cart', state.cart)
            } else {
                state.cart.push({ product: data, quantity: 1})
            }
            localStorage.setItem('cartState', state.cart)

        } else {
            console.log('cart is empty', state.cart)
            state.cart.push({ product: data, quantity: 1})
            localStorage.setItem('cartState', state.cart)
        }
       
    });
});



const removeFromCart = action('remove-cart', async (data, mutate) => {
    mutate(state => {
       
        const cartProduct = state.cart.find(cartProd => cartProd.product.id == data.id)
        if(cartProduct){
            localStorage.removeItem('cartState')
           const index = state.cart.indexOf(cartProduct)
            state.cart[index].quantity -= 1
            if(state.cart[index].quantity == 0){
                state.cart = state.cart.filter(cartProd => cartProd.product.id !== data.id)
                localStorage.setItem('cartState', state.cart)
            }
        } else {
            console.log('product non existing in the cart')
        }
    });
});

export {
    createStore,
    state,
    cartGetter,
    addToCart,
    removeFromCart

}