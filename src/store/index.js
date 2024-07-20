import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: [],
        user: null,
        token: localStorage.getItem('token') || '',
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addProduct(state, product) {
            state.products.push(product);
        },
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        logout(state) {
            state.user = null;
            state.token = '';
            localStorage.removeItem('token');
        },
    },
    actions: {
        fetchProducts({ commit }) {
            // Simulez un appel API
            const products = [
                { id: 1, name: 'Product 1', price: '$100' },
                { id: 2, name: 'Product 2', price: '$200' },
            ];
            commit('setProducts', products);
        },
        createProduct({ commit }, product) {
            // Simulez un appel API
            commit('addProduct', product);
        },
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/auth/login', credentials);
                commit('setToken', response.data.token);
                commit('setUser', response.data.user);
            } catch (error) {
                throw new Error('Invalid credentials');
            }
        },
        logout({ commit }) {
            commit('logout');
        },
    },
    getters: {
        allProducts: state => state.products,
        isAuthenticated: state => !!state.token,
    },
});
