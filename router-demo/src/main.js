import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 路由列表（使用单文件集中存放路由列表）
import routes from './routes'

Vue.config.productionTip = false

// 注册VueRouter相关的JS和全局组件
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes,
})

new Vue({
  router, // 注册在Vue实例上，在各个组件都可以使用到router
  render: h => h(App),
}).$mount('#app')
