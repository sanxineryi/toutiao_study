import dayjs from 'dayjs'
import Vue from 'vue'
// 语言设置
import 'dayjs/locale/zh-cn'

// 使用相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

// 定义全局过滤器
Vue.filter('relativeTime', val => {
  return dayjs().to(dayjs(val))
})
