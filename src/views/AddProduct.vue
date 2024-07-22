<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="product.title" label="Product Title"></v-text-field>
      <v-text-field v-model="product.description" label="Product Description"></v-text-field>
      <v-text-field v-model="product.price" label="Product Price"></v-text-field>
      <v-text-field v-model="product.imageUrl" label="Product Image URL"></v-text-field>
      <v-text-field v-model="product.category" label="Product Category"></v-text-field>
      <v-select
          v-model="product.brandId"
          v-if="brands.length > 0"
          :items="computedBrands"
          item-title="name"
          item-value="id"
          label="Product Brand"
      ></v-select>
      <v-btn type="submit">Add Product</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import productService from '@/services/productService'

const product = ref({
  title: '',
  description: '',
  price: '',
  imageUrl: '',
  category: '',
  brandId: null
})

const brands = ref([])

const fetchBrands = async () => {
  try {
    brands.value = await productService.getBrands()
  } catch (error) {
    console.error(error)
  }
}

const computedBrands = computed(() => {
  return brands.value
})

onMounted(fetchBrands)

const submit = async () => {
  try {
    await productService.postProduct({
      ...product.value,
      brand: product.value.brandId
    })
    product.value = {
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      category: '',
      brand: null
    }
  } catch (error) {
    console.error(error)
  }
}

</script>
