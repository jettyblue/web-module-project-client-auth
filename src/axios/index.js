import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        header: {
            authorization: token
        },
        baseURL: 'http://localhost:9000/api'
    })
}

export default axiosWithAuth;
