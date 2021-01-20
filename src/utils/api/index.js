import server from '../server/http'

// banner轮播图
export const getbanner = () => server.get('/banner')
// 首页列表
export const getHome = () => server.get('/recommend/appIndex')
// 老师详情
export const getTeaDetail = (id) => server.get(`/teacher/${id}?`)
// 老师介绍
export const getInce = (id) => server.get(`/teacher/info/${id}?`)
// 主讲课程
export const getMain = (id) => server.post(`/teacher/mainCourse`, {
    teacher_id: id,
    limit: 10,
    page: 1
})
// 老师关注与取消关注
export const getCollect = (id) => server.get(`/teacher/collect/${id}`)
// 热门咨询详情页
export const getHotDetail = (id) => server.post(`/information/detail`, {
    information_id: id,
})

export const getLogin = (obj) => server.post('/login', obj) //登录接口
export const getprofile = () => server.get('/userInfo') //个人信息获取接口
export const getuserinfo = (obj) => server.put('/user', obj) //个人信息修改页面
export const getcity = () => server.get('sonArea/0') //获取城市数据
export const getcollect = (obj) => server.get('/collect' + `?page=${obj.page}` + `&limit=${obj.limit}` + `&type=${obj.type}`) //获取关注数据




export const getTeachers = () => server.get('myStudy/2?') //特色课暂时不知道这是个啥
export const gets = (obj) => server.get(
    `courseBasis?page=${obj.page}&limit=10&order_by=${obj.num}`
) //特色课课程
export const getlists = () => server.get('courseClassify') //特色课分类
export const getsousuo = (val) => server.get(`courseBasis?limit=10&page=1&course_type=0&keywords=${val}`) //特色课搜索
// 课程详情
export const getCourseDetail = (id) => server.get(`/courseInfo/basis_id=${id}?`)

// 课程大纲
export const getCoursedaGang = (id) => server.post(`/courseChapter`, {
    id: id
})

// 课程详情
export const getCourseInce = (id) => server.get(`/spellGroupInfo/${id}/course?`)
// 课程评价
export const getCourseComment = (id) => server.post(`/courseComment`, {
    id: id,
    limit: 100,
    page: 1,
})

// 课程收藏
export const getCourseShouCang = (id) => server.post(`/collect`, {
    course_basis_id: id,
    type: 1
})
// 课程取消收藏
export const getCourseQuXiaoShouCang = (id) => server.post(`/collect/cancel/227/1`, {
    collect_id: id,
})
// 立即报名
export const getbaoming = (id,type) => server.post(`/order/downOrder`, {
    shop_id: id,
    type: type,
})
// 立即学习
export const getstudy = (id) => server.get(`/myStudy/course/${id}`)


