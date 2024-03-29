import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant ui组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入flexible
import 'amfe-flexible'

// 引入全局less文件 保证自己写的样式引入放在最下面
import '@/styles/index.less'

import '@/utils/dayjs'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  // 安装全局事件总线
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
