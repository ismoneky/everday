import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/home/homeRouter'

Vue.use(VueRouter)
const routes = [{
    path: '/', //渲染主页面
    name: 'hasbottomnav',
    redirect: '/home',
    component: () => import('../views/hasBotomNav.vue'),
    children: [
      ...HomeRouter,
    ]
  },
  {
    path: 'teaList', //名师阵容、明星讲师
    name: 'teaList',
    component: () => import('../views/home/teaList.vue')
  },
  {
    path: '/course', //精品课程、推荐课程
    name: 'course',
    component: () => import('../views/home/course.vue')
  },
  {
    path: '/compile', //编辑页面  zzw
    name: 'compile',
    component: () => import('../views/profile/compile.vue')
  },
  {
    path: '/changename', //修改name页面  zzw
    name: 'changename',
    component: () => import('../views/profile/changename.vue')
  },
  {
    path: '/kdzl', //考点专练页面
    name: 'kdzl',
    component: () => import('../views/Practice/lxs/kdzl.vue'),
  },
  {
    path: '/tjlx', //套卷练习页面
    name: 'tjlx',
    component: () => import('../views/Practice/lxs/tjlx.vue'),
  },
  {
    path: '/tjlx2', //套卷练习2页面
    name: 'tjlx2',
    component: () => import('../views/Practice/lxs/tjlx2.vue'),
  },
  {
    path: '/ctjl', //套卷练习2页面
    name: 'ctjl',
    component: () => import('../views/Practice/lxs/ctjl.vue'),
  },
  {
    path: '/feature', //特色课程页面
    name: 'feature',
    component: () => import('../views/Courses/feature.vue')
  },
  {
    path: '/myprofile', // 个人中心页面
    name: "myprofile",
    component: () => import('../views/profile/Myprofile.vue')
  },
  {
    path: '/feature', //特色课程页面
    name: 'feature',
    component: () => import('../views/Courses/feature.vue')
  },
  {
    path: '/changesex', //修改sex页面  zzw
    name: 'changesex',
    component: () => import('../views/profile/changesex.vue')
  },
  {
    path: '/myclass',  //我的课程页面
    name: 'myclass',
    component: () => import('../views/profile/myclass.vue')
  },
  {
    path: '/balance', // 我的余额页面
    name: 'balance',
    component: () => import('../views/profile/balance.vue')
  }, {
    path: '/mycollection',  //我的收藏页面
    name: 'mycollection',
    component: () => import('../views/profile/mycollection.vue')
  },{
    path:'/login', //登录页面
    name:'login',
    component:() => import('../views/login/thelogin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router