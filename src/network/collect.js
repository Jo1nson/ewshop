import {request} from './request';

// 创建定单
export function getCollects(params) {
  return request({
    url:'/api/collects',
    method: 'get',
    params
  })
}

export function modifyCollects(id){
  return request({
    url:`/api/collects/goods/${id}`,
    method:'post',
  })
}
