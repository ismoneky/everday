const loginStore = {
    namespaced: true,
    state:{
       user:''
    },
    mutations: {
        setUser(state,val){
            console.log(val);
            state.user  = val
        }
    },
    actions: {

    },
    getters: {

    }
}

export default loginStore