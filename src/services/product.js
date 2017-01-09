import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
  // return request(`/api/product?${qs.stringify(params)}`);
  console.log('11111')
  console.log(qs.stringify(params))
    console.log('2222')
  return request(`http://192.168.20.133:9999/index/productlist?${qs.stringify(params)}`)
}

export async function create(params) {
  return request('/api/users', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function remove(params) {
  return request('/api/users', {
    method: 'delete',
    body: qs.stringify(params),
  });
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    body: qs.stringify(params),
  });
}
