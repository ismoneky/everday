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

export const getLogin = (obj) => server.post('/login', obj)       //登录接口
export const getprofile = () => server.get('/userInfo')           //个人信息获取接口
export const getuserinfo = (obj) => server.put('/user',obj)       //个人信息修改页面
export const getcity = () => server.get('sonArea/0')              //获取城市数据
export const getcollect = (obj) => server.get('/collect' + `?page=${obj.page}` + `&limit=${obj.limit}` + `&type=${obj.type}`)//获取关注数据
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