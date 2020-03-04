import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home.vue'
import TodoList from '../components/TodoList.vue'
import News from '../components/News.vue'
import Content from '../components/Content.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import Form from '../components/Form_element_ui.vue'

const routes =[
    {path:'/home',component:Home},
    {path:'/todoList',component:TodoList},
    {path:'/news',component:News},
    {path:'/content/:aid',component:Content},
    {path:'/shoppingCart',component:ShoppingCart},
    {path:'/form',component:Form},
    {path:'*',redirect:'/home'}
    
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router