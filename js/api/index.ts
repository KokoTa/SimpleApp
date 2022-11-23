import request from '../config/request';

export const getTestApi = (params: any) => {
  return request({
    url: 'b2c329ef-38b0-4db2-8e0b-2c59420f5372',
    method: 'get',
    params,
  });
};
