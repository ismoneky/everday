import server from '../server/http'

const getbanner = async function () {
    var {
        data
    } = await server.get('/banner')
    return data
}

const getHome = async function () {
    var {
        data
    } = await server.get('/recommend/appIndex')
    return data
}

// const getLogin =async function(obj){
//     console.log(obj);
//     var {data} = await server.post('/login',obj)
//     return data
// }
export const getLogin = (obj) => server.post('/login', obj)
export {
    getbanner,
    getHome,
}