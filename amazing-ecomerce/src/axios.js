import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5002/amazing-ecomerce/us-central1/api'  // Where the API (cloud fuction) lives
});

export default instance;