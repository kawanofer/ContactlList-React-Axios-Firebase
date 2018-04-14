import axios from 'axios';

const instance = axios.create({
    baseURL: 'INSERT YOUR FIREBASE URL'
});

export default instance;