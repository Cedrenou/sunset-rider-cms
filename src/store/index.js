import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: [],
        user: null,
        token: localStorage.getItem('access_token') || '',
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
            localStorage.setItem('access_token', token);
        },
        logout(state) {
            state.user = null;
            state.token = '';
            localStorage.removeItem('access_token');
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const products = await axios.get('/products');
                commit('setProducts', products.data);
            } catch (error) {
                console.error(error);
            }
        },
        createProduct({ commit }, product) {
            // Simulez un appel API
            commit('addProduct', product);
        },
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/auth/login', credentials);
                commit('setToken', response.data.access_token);
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
