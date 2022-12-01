import request from '../config/request';
// import base64 from 'base-64';

export const getTestApi = (params: any) => {
  return request({
    url: 'b2c329ef-38b0-4db2-8e0b-2c59420f5372',
    method: 'get',
    params,
  });
};

export const uploadApi = (data: any) => {
  return request({
    baseURL: 'https://cgtest.cmpanda.com',
    url: '/api-file/files-anon?platform=cmp',
    method: 'post',
    data,
  });
};
