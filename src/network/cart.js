import {request} from './request'


export function addCart(data){
  return request({
    url:'/api/carts',
    method:'post',
    data
  })
}

export function modifyCart(id,data){
  return request({
    url:`/api/carts/${id}`,
    method:'put',
    data
  })
}

export function checkedCart(data){
  return request({
    url:'/api/carts/checked',
    method:'patch',
    data
  })
}

export function getCart(data=''){
  return request({
    url:'/api/carts?'+data,
    method:'get'
  })
}


export function deleteCartItem(id){
  return request({
    url:`/api/carts/${id}`,
    method:'delete',
  })
}
