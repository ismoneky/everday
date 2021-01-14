import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/record/record.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router