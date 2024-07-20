import axios from 'axios';
import store from './store';

axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.request.use(config => {
    const token = store.state.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios;
