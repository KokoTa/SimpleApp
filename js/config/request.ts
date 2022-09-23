import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:4523/m1',
  timeout: 10000,
  withCredentials: true,
});

export default request;
