<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>{{ product.category }}</v-card-text>
          <v-card-text v-if="product.brand">{{ product.brand.name }}</v-card-text>
          <v-img :src="product.imageUrl" height="200px"></v-img>
          <v-card-subtitle>{{ product.price }}€</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import store from '@/store'

const products = ref([]);

const fetchProducts = async () => {
  try {
    await store.dispatch('fetchProducts');
    products.value = store.state.products;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchProducts);
</script>
