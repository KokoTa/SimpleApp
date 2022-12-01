import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const request = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  timeout: 10000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
