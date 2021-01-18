import server from '../server/http'

const getbanner = async function(){
    var {data} = await server.get('/banner')
    return data
}

export{
   
    getbanner,

}