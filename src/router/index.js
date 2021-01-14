import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
  }
]

const router = new VueRouter({
  routes
})

export default router
