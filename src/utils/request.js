import axios from 'axios'

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/' 失效
  baseURL: 'https://toutiao.itheima.net'
})

export default request
