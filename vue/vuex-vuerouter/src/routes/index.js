import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from '../components/pageA'
import PageB from '../components/pageB'
import Test from '../components/test'
Vue.use(VueRouter)

const routes=[
    {path:'/a',name:'pageA',component:PageA},
    {
        path:'/b/:id',
        props:true,
        component:PageB,
        children:[
            {path:'test',component:Test}
        ]
    },

    {path:'/home',redirect:'/'}
]

export default new VueRouter({
    mode:'history',
    routes
})