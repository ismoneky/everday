const router = [{
        path: 'home',
        name: 'Home',
        component: () => import('./home.vue'),
    },
    {
        path: '/record', //约课页面
        name: 'record',
        component: () => import('../record/record.vue'),
        children: [

        ]
    },
    {
        path: '/practice',  //练习页面
        name: 'practice ',
        component: () => import('../Practice/practice.vue'),
        children: [

        ]
    },
    {
        path: '/feature',   //课程页面
        name: 'feature',
        component: () => import('../Courses/feature.vue')
    },
    {
        path: '/myprofile', // 个人中心页面
        name: "myprofile",
        component: () => import('../profile/Myprofile.vue')
    },

]

export default router