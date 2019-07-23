// 引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入需要配置的组件
import Login from '../views/login'
import Home from '../views/home'

// 在vue 中注册
Vue.use(VueRouter)

// 配置路由规则
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { path: '/', component: Home }
  ]
})

export default router
