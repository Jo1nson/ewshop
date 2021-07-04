import {request} from './request'

export function register(data){
  return request({
    url:'/api/auth/register',
    method: 'post',
    data,
  })
}

export function login(data){
  return request({
    url:'/api/auth/login',
    method: 'post',
    data,
  })
}

export function logout(data){
  return request({
    url:'/api/auth/logout',
    method: 'post',

  })
}

export function getUser() {
  return request({
    url:'/api/user',
  })
}

export function modifyUser(data) {
  return request({
    url:'/api/user',
    method: 'put',
    data,
  })
}

export function modifyAvatar(data) {
  return request({
    url:'/api/user',
    method: 'patch',
    data,
  })
}
