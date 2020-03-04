import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
