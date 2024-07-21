<template>
  <div>HOME</div>

  <p>{{isAuthenticated}}</p>
  <button @click="logStore">log</button>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'

const store = useStore();


const isAuthenticated = computed(() => store.getters.isAuthenticated);

const logStore = () => {
  console.log(store)
}
</script>

<style scoped></style>
