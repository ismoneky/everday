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
    path:'/compile',  //编辑页面  zzw
    name:'compile',
    component:() => import('../views/profile/compile.vue')
  },
  {
    path:'/changename', //修改name页面  zzw
    name:'changename',
    component:() => import('../views/profile/changename.vue')
  },
  {
    path:'/changesex', //修改sex页面  zzw
    name:'changesex',
    component:() => import('../views/profile/changesex.vue')
  },{
    path:'/myclass',
    name:'myclass',
    component:() => import('../views/profile/myclass.vue')
  }
  ,{
    path:'/balance',
    name:'balance',
    component:() => import('../views/profile/balance.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router