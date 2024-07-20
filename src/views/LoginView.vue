<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field v-model="email" label="Email" type="email"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const login = async () => {
  try {
    await store.dispatch('login', { email: email.value, password: password.value });
    router.push('/');
  } catch (error) {
    console.error('Login failed', error);
  }
};
</script>
