<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Products</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/products">Products</v-btn>
      <v-btn text to="/add-product">Add Product</v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script setup>

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
