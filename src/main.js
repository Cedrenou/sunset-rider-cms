import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from '@/store'
import axios from '@/axios'

const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
})


app.use(router);
app.use(vuetify);
app.use(store);
app.config.globalProperties.$axios = axios;
app.mount('#app');
