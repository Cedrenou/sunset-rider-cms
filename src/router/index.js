import { createRouter, createWebHistory } from 'vue-router';
import AddProduct from '../views/AddProduct.vue';
import ProductsView from '@/views/ProductsView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import store from '@/store'
import UpdateProduct from '@/views/UpdateProduct.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
    { path: '/products', name: 'Products', component: ProductsView, meta: { requiresAuth: true } },
    { path: '/add-product', name: 'AddProduct', component: AddProduct, meta: { requiresAuth: true } },
    { path: '/update-product/:id', name: 'UpdateProduct', component: UpdateProduct, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: LoginView},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({name: 'Login'});
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;
