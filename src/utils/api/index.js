import server from '../server/http'

// banner轮播图
export const getbanner = () => server.get('/banner')
// 首页列表
export const getHome = () => server.get('/recommend/appIndex')
// 老师详情
export const getTeaDetail = (id) => server.get(`/teacher/info?id=${id}`)
// 老师介绍
export const getInce = (id) => server.get(`/teacher?id=${id}`)
// 主讲课程
export const getMain = (id) => server.post(`/teacher/mainCourse`, {
    teacher_id: id,
    limit: 10,
    page: 1
})
// 老师关注与取消关注
export const getCollect = (id) => server.get(`/teacher/collect?teacher_id=${id}`)
// 热门咨询详情页
export const getHotDetail = (id) => server.post(`/information/detail`, {
    information_id: id,
})

export const getLogin = (obj) => server.post('/login', obj) //登录接口

<<<<<<< HEAD
// 老师详情
const getTeaDetail = async function (id) {
    var {
        data
    } = await server.get(`/teacher/info/id=${id}`)
    return data
}
export const getTeachers = () => server.get('myStudy/2') //特色课

export {
    getbanner, //轮播图
    getHome, //首页列表
    getTeaDetail, //老师详情
}   
=======
>>>>>>> e45f57e42d99309d428c39a2a4ee9798f0847242
