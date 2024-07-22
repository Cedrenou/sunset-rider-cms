<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Products</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text="Home" to="/"></v-btn>
      <v-btn text="Products" to="/products"></v-btn>
      <v-btn text="Add Product" to="/add-product"></v-btn>

      <v-spacer></v-spacer>
      <v-btn v-if="isAuthenticated" @click="logout">Logout</v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script setup>


import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const router = useRouter();
const store = useStore();

const isAuthenticated = computed(() => store.getters.isAuthenticated);

const logout = () => {
  store.dispatch('logout');
  router.push('/login');
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
