import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import CancelToken from '../utils/CancelToken';

const request = axios.create({
  baseURL: 'http://192.168.2.127:4523/m1',
  timeout: 10000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    CancelToken.createCancelToken(config, config.url as string);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    CancelToken.delCancelToken(response.request.url as string);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
