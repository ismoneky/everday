const teachers = {
    namespaced: true,
    state:{
        flag:true,
       list:[],//特色课的数据
       vals:[],//页面搜索的记录

    },
    mutations: {
        getcz(state,val){   //重置数据
            state.flag=true
        },
        gettypes(state,val){ //特色课数据
            state.list=val
        },
        getpush(state,val){ //特色课刷新数据
            val.forEach(item => {
            state.list.push(item)
            });
        },
        getval(state,val){ //回现搜索记录5条
            if(state.vals.length==5){
                state.vals.pop()
                state.vals.unshift(val)
            }else{
                state.vals.unshift(val)

            }
            state.flag=false
        },
        del(state,val){ //清空搜索记录
            state.vals=[]
        },
    },
    actions: {

    },
    getters: {

    }
}

export default teachers