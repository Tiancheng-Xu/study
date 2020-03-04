import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false


Vue.use(VueResource)
Vue.use(Element)

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
