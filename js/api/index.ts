import request from '../config/request';

export const getTestApi = (params: any) => {
  return request({
    url: '/737348-0-default/test',
    method: 'get',
    params,
  });
};
