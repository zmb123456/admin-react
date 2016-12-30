import request from '../utils/request';
import qs from 'qs';

export async function query(params) {

  return [{
          key:'1',
          name:'足球',
          price:66,
          state:1
        },{
          key:'2',
          name:'篮球',
          price:77,
          state:0
        },{
          key:'3',
          name:'乒乓球',
          price:88,
          state:1
        }]
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
