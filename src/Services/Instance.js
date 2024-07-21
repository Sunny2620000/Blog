import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Set your base URL here
  timeout: 1000, // Optional timeout setting
  headers: { 'Content-Type': 'application/json' } // Optional default headers
});

export default axiosInstance;
