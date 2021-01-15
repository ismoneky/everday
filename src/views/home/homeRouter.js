const router = [{
        path: 'home',
        name: 'Home',
        component: () => import('./home.vue'),
<<<<<<< HEAD
       
=======
    }, {
        path: '/record', //课程页面
        name: 'record',
        component: () => import('../record/record.vue'),
        children: [

        ]
    },
    {
        path: '/practice', //练习页面
        name: 'practice ',
        component: () => import('../Practice/practice.vue'),
        children: [

        ]
    },
    {
        path: '/feature', //特色课程页面
        name: 'feature',
        component: () => import('../Courses/feature.vue')
    },
    {
        path: '/myprofile', // 个人中心页面
        name: "myprofile",
        component: () => import('../profile/Myprofile.vue')
>>>>>>> ab11ec2cc6de8c6d6a3695a5ab7bd4b76bcb0500
    },

]

export default router