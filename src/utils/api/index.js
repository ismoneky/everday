import server from '../server/http'

// banner轮播图
export const getbanner = () => server.get('/banner')
// 首页列表
export const getHome = () => server.get('/recommend/appIndex')
// 老师详情
<<<<<<< HEAD
export const getTeaDetail = (id) => server.get(`/teacher/infoid=${id}`)
=======
export const getTeaDetail = (id) => server.get(`/teacher/${id}?`)
>>>>>>> b8cb787645936be899fa2ca2d91c4537de03684c
// 老师介绍
export const getInce = (id) => server.get(`/teacher/info/${id}?`)
// 主讲课程
export const getMain = (id) => server.post(`/teacher/mainCourse`, {
    teacher_id: id,
    limit: 10,
    page: 1
})
// 老师关注与取消关注
<<<<<<< HEAD
export const getCollect = (id) => server.get(`/teacher/collect/` + id)
=======
export const getCollect = (id) => server.get(`teacher/collect?teacher_id=${id}?`)
>>>>>>> b8cb787645936be899fa2ca2d91c4537de03684c
// 热门咨询详情页
export const getHotDetail = (id) => server.post(`/information/detail`, {
    information_id: id,
})

<<<<<<< HEAD
export const getLogin = (obj) => server.post('/login', obj)       //登录接口
export const getprofile = () => server.get('/userInfo')           //个人信息获取接口
export const getuserinfo = (obj) => server.put('/user',obj)       //个人信息修改页面
export const getcity = () => server.get('sonArea/0')              //获取城市数据
export const getcollect = (obj) => server.get('/collect' + `?page=${obj.page}` + `&limit=${obj.limit}` + `&type=${obj.type}`)//获取关注数据
=======
// 课程详情
export const getCourseDetail = (id) => server.get(`/courseInfo/basis_id=${id}?`)

// 课程大纲
export const getCoursedaGang = (id) => server.post(`/courseChapter`, {
    id: id
})

// 课程详情
export const getCourseInce = (id) => server.get(`/spellGroupInfo/${id}/course?`)




export const getLogin = (obj) => server.post('/login', obj) //登录接口
export const getprofile = () => server.get('/userInfo') //个人信息获取接口
export const getuserinfo = (obj) => server.put('/user', obj) //个人信息修改页面
export const getcity = () => server.get('sonArea/0') //获取城市数据
export const getcollect = (obj) => server.get('/collect' + `?page=${obj.page}` + `&limit=${obj.limit}` + `&type=${obj.type}`) //获取关注数据


>>>>>>> b8cb787645936be899fa2ca2d91c4537de03684c

export const getTeachers = () => server.get('myStudy/2') //特色课