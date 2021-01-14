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
<<<<<<< HEAD
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/myprofile',
    name:"myprofile",
    component : () => import('../views/profile/Myprofile.vue')
}
=======
    path: '/record',
    name: 'record',
    component: () => import('../views/record/record.vue')
  }
>>>>>>> 36f852d2907bd5ef6818f56054496affdc4746c7
]

const router = new VueRouter({
  routes
})

export default router