import axios from 'axios'

const server = axios.create({
    baseURL: 'http://120.53.31.103:84/api/app',
    timeout: 10000, // 请求超时的时间
    headers: {
        "deviceType":"H5"
    }
})

// 请求拦截
server.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
}, err => {
    console.log(err)
})

// 响应拦截
// res 服务器返回的数据信息
server.interceptors.response.use(res => {
    if (res.data.msg == "当前登录token无效，请重新登录") {
    } else {
        return res
    }
}, err => {
    // 只是作为参考例子 具体情况要看服务器真实的返回数据
    switch (err.code) {
        case 500:
            console.log('服务器错误')
            break;
        case 404:
            console.log('页面找不到了')
            break;
        default:
            console.log('网络连接错误')
            break;
    }
})

export default server