import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../views/AddProduct.vue';
import ProductsView from '@/views/ProductsView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/products', name: 'Products', component: ProductsView },
    { path: '/add-product', name: 'AddProduct', component: AddProduct },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
