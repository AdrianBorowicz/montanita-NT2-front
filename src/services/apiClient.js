import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 2000,
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'}
  });

  export default apiClient;