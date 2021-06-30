import {request} from './request'

export function getCategory(){
  return request({
    url:'/api/goods',
    // method: 'GET',
    // params: {}
  })
}

export function getCategoryGoods(order='sales',cid=0, page=1){
  return request({
    url:'/api/goods?category_id='+cid+'&page='+page+'&'+order+'=1',
    // method: 'GET',
    // params: {}
  })
}