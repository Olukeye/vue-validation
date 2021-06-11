import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3088/';

// store the localStorage 
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');