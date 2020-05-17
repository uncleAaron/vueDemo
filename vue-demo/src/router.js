import Vue from "vue";
import Router from "vue-router";
import ComponentDemo from './views/ComponentDemo'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/components',
            name: '组件Demo',
            component: ComponentDemo
        },
        {
            path: '/propDataUpdate',
            name: '组件更新',
            component: () => import('./views/PropDataUpdate')
        },
        {
            path: '/directive',
            name: '指令',
            component: () => import('./views/Directive')
        },
        {
            path: '/computedWatch',
            name: '计算属性和侦听器',
            component: () => import('./views/ComputedWatch')
        },
        {
            path: '/getData',
            name: 'axios取数据',
            component: () => import('./views/GetData')
        }
    ]
})