import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/rafa-gre/vtex-ecommerce'
})

export default api;