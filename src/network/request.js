import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'https://api.shop.eduwork.cn',
    timeout:5000
  })

  //请求拦截
  instance.interceptors.request.use(config=>{
    //如果有一个接口需要认证才能访问，就在这统一设置；
    return config;
  },err=>{
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data ? res.data :res;
  }, err=>{
    //如果有错误，会处理，显示错误信息；需要授权才能访问的接口，统一去login授权

  })
  return instance(config)
}
