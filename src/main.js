import Vue from 'vue'
import App from './App.vue'

// 引入UI框架 和 样式  需要下载element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入路由组件  需要下载vue-router
import router from './router'

// 引入axios实例 在Vue原型中添加方法 axios需要下载
import axios from './api/axios.js'
Vue.prototype.$http = axios

// 在vue中注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
