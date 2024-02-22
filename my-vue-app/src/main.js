import { createApp } from 'vue'
import './style.css'
import App from './App.vue'




//Vue router 
import { createRouter, createWebHashHistory } from 'vue-router'


//Component
import ShopPage from './pages/ShopPage.vue'
import CartPage from './pages/CartPage.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'


const routes=[
    { 
        path: '/', 
        name: 'HomePage', 
        component: HomePage, 
    },

    {
        path:'/shop',
        name:'shop',
        component:ShopPage,
    },
    {
        path:'/cart',
        name:'cart',
        component:CartPage,
    },

    {
        path:'/login',
        name:'login',
        component:LoginPage,
    }
]


//router 
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes, 
    strict: true,
});

//fin router 
const app = createApp(App)
app.use(router)
app.mount("#app");