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
      {
        path: 'teaList', //名师阵容、明星讲师
        name: 'teaList',
        component: () => import('../views/home/teaList.vue')
      },

    ]
  },
  {
<<<<<<< HEAD
    path: '/course', //精品课程、推荐课程
    name: 'course',
    component: () => import('../views/home/course.vue')
  }, {
    path: '/record', //课程页面
    name: 'record',
    component: () => import('../views/record/record.vue'),
    children: [

    ]
=======
    path:'/compile',  //编辑页面  zzw
    name:'compile',
    component:() => import('../views/profile/compile.vue')
>>>>>>> ab11ec2cc6de8c6d6a3695a5ab7bd4b76bcb0500
  },
  
  {
<<<<<<< HEAD
    path: '/practice', //练习页面
    name: 'practice ',
    component: () => import('../views/Practice/practice.vue'),
    children: [
=======
<<<<<<< HEAD
    path:'/changename', //修改name页面  zzw
    name:'changename',
    component:() => import('../views/profile/changename.vue')
=======
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
>>>>>>> ab11ec2cc6de8c6d6a3695a5ab7bd4b76bcb0500

    ]
  },
  {
<<<<<<< HEAD
    path: '/feature', //特色课程页面
    name: 'feature',
    component: () => import('../views/Courses/feature.vue')
  },
  {
    path: '/myprofile', // 个人中心页面
    name: "myprofile",
    component: () => import('../views/profile/Myprofile.vue')
  },

=======
    path:'/feature',  //特色课程页面
    name:'feature',
    component :() => import('../views/Courses/feature.vue')
>>>>>>> 3e69ca35797854c6b79ed800bfb367b0b4bc2e7b
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
  
>>>>>>> ab11ec2cc6de8c6d6a3695a5ab7bd4b76bcb0500
]

const router = new VueRouter({
  routes
})

export default router