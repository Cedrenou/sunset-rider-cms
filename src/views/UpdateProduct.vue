<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="product.title" label="Product Title" required></v-text-field>
      <v-text-field v-model="product.description" label="Product Description" required></v-text-field>
      <v-text-field v-model="product.price" label="Product Price" required></v-text-field>
      <v-text-field v-model="product.imageUrl" label="Product Image URL" required></v-text-field>
      <v-text-field v-model="product.category" label="Product Category" required></v-text-field>
      <v-select
          v-model="product.brandId"
          :items="computedBrands"
          item-title="name"
          item-value="id"
          label="Product Brand"
      ></v-select>
      <v-btn type="submit">Updates Product</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import productService from '@/services/productService'
import {useRouter} from 'vue-router'

const router = useRouter()
const productId = router.currentRoute.value.params.id

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

const fetchProduct = async (productId) => {
  try {
    product.value = await productService.getProduct(productId)
  } catch (error) {
    console.error(error)
  }
}

const computedBrands = computed(() => {
  return brands.value
})

onMounted(fetchBrands)
onMounted(() => fetchProduct(productId))


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

<style></style>