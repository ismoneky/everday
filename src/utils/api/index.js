import server from '../server/http'

const getbanner = async function(){
    var {data} = await server.get('/banner')
    return data
}

const  getHome = async function(){
    var {data} = await server.get('/recommend/appIndex')
    return data
}


export {
    getbanner,
    getHome
}