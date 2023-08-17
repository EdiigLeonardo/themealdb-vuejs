import axios from 'axios';

const apiBaseUrl = 'https://www.themealdb.com/api/json/v1/1/';
const axiosClient = axios.create({
    baseURL: apiBaseUrl,
});

export default axiosClient;