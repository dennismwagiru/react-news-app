import axios from "axios";

const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
    headers: {
        'Accept': 'application/json',
        'Referrer': 'Dashboard'
    }
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

const apiService = {
    get: (url, params) => instance.get(url, {params: params}).then(res => res.data),
    post: (url, data, ) => instance.post(url, data).then(res => res.data),
};

export default apiService;
