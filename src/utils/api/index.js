import server from '../server/http'

// banner轮播图
const getbanner = async function () {
    var {
        data
    } = await server.get('/banner')
    return data
}

// 首页列表
const getHome = async function () {
    var {
        data
    } = await server.get('/recommend/appIndex')
    return data
}

export const getLogin = (obj) => server.post('/login', obj) //登录接口

// 老师详情
const getTeaDetail = async function (id) {
    var {
        data
    } = await server.get(`/teacher/info/id=${id}`)
    return data
}

export {
    getbanner, //轮播图
    getHome, //首页列表
    getTeaDetail, //老师详情
}