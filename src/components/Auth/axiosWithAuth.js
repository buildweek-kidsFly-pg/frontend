import axios from 'axios';

export default function() {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://reqres.in/api/',
        headers: {
            'Authorization': token
        }
    })
} 