import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

<<<<<<< HEAD
const routes = [
 
  {
    path: '/kc',
    name: 'kc',
    component: () => import('../views/Courses/kc.vue')
  },
  {
    path: '/lx',
    name: 'lx',
    component: () => import('../views/Practice/lx.vue')
=======
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
>>>>>>> 36f852d2907bd5ef6818f56054496affdc4746c7
  }
]

const router = new VueRouter({
  routes
})

export default router