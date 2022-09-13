import axios from 'axios';
import requestConfig from './requestConfig';

const request = axios.create({
  baseURL: 'https://api.devio.org',
  timeout: 10000,
  headers: {
    'course-flag': requestConfig.headers['course-flag'],
    'auth-token': requestConfig.headers['auth-token'],
  },
});

export default request;
