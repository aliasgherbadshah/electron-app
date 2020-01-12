import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.18.101.32:3000'
});

axiosInstance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance;