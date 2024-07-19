<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="product.title" label="Product Title"></v-text-field>
      <v-text-field v-model="product.description" label="Product Description"></v-text-field>
      <v-text-field v-model="product.price" label="Product Price"></v-text-field>
      <v-text-field v-model="product.imageUrl" label="Product Image URL"></v-text-field>
      <v-text-field v-model="product.category" label="Product Category"></v-text-field>
      <v-btn type="submit">Add Product</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>

import { ref } from 'vue'
import productService from '@/services/productService'

const product = ref({
  title: '',
  description: '',
  price: '',
  imageUrl: '',
  category: ''
})

const submit = async () => {
  try {
    await productService.postProduct(product.value)
    product.value = {
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      category: ''
    }
  } catch (error) {
    console.error(error)
  }
}

</script>
