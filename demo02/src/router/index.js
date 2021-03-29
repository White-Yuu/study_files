import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/add',
    name:'add',
    component: ()=>import('../components/addOut')
  },
  {
    path:'/cost',
    name:'cost',
    component: ()=>import('../components/cost')
  },
  {
    path:'/top',
    name:'top',
    component: ()=>import('../components/top')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
