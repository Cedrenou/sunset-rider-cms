import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addProduct(state, product) {
            state.products.push(product);
        },
    },
    actions: {
        fetchProducts({ commit }) {
            // Simulate API call
            const products = [/* array of products */];
            commit('setProducts', products);
        },
        createProduct({ commit }, product) {
            // Simulate API call
            commit('addProduct', product);
        },
    },
    getters: {
        allProducts: state => state.products,
    },
});
