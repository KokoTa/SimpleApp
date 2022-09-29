import axios from 'axios';

const request = axios.create({
  baseURL: 'http://192.168.2.127:4523/m1',
  timeout: 10000,
  withCredentials: true,
});

export default request;
