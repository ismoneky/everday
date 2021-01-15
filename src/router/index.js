import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/home/homeRouter'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',   //渲染主页面
    name:'hasbottomnav',
    redirect:'/home',
    component: () => import('../views/hasBotomNav.vue'),
    children:[
      ...HomeRouter
    ]
  }, 
  {
    path: '/record',   //课程页面
    name: 'record',
    component: () => import('../views/record/record.vue'),
    children:[

    ]
  },
  
  {
    path: '/practice',  //练习页面
    name: 'practice ',
    component: () => import('../views/Practice/practice.vue'),
    children:[
      
    ]
  },
  {
    path: '/kdzl',   //考点专练页面
    name: 'kdzl',
    component: () => import('../views/Practice/lxs/kdzl.vue'),
    children:[

    ]
  },
  {
    path: '/tjlx',   //套卷练习页面
    name: 'tjlx',
    component: () => import('../views/Practice/lxs/tjlx.vue'),
    children:[

    ]
  },
  {
    path: '/tjlx2',   //套卷练习2页面
    name: 'tjlx2',
    component: () => import('../views/Practice/lxs/tjlx2.vue'),
    children:[

    ]
  },
  {
    path:'/feature',  //特色课程页面
    name:'feature',
    component :() => import('../views/Courses/feature.vue')
  },
  {
    path: '/myprofile',  // 个人中心页面
    name: "myprofile",
    component: () => import('../views/profile/Myprofile.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router