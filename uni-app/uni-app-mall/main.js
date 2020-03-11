import Vue from 'vue'
import App from './App' 
import http from './utils/https.js'

// 网络请求
Vue.prototype.request = http

Vue.config.productionTip = false

// 注册全局组件
import status from './components/status.vue'
Vue.component('page-status', status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
