import axios from 'axios'
import store from '@/store'
const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/' 失效
  baseURL: 'https://toutiao.itheima.net'
})

// 添加请求拦截器 设置请求头 token
request.interceptors.request.use(config => {
  // 不是所有请求都要触发请求拦截器  要user 且 user里面要有token(不能为null) 才触发拦截器 添加请求头Authorization字段
  if (store.state.userInfo.user && store.state.userInfo.user.token) {
    config.headers.Authorization = 'Bearer ' + store.state.userInfo.user.token
  }
  return config
}, error => {
// Do something with request error
  return Promise.reject(error)
})
export default request
