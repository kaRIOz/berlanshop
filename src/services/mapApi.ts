import axios from "axios";

const api = axios.create({ baseURL: "https://api.neshan.org/v1/search?term=" });

api.interceptors.response.use(
    response => {
        return {
            ...response,
            data: response.data,
        };
    },
    error => Promise.reject(error),
);

export default api;
