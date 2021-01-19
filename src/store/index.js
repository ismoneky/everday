import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/store/loginStore'
import teachers from '@/store/LYX'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teaShow: false,
    subject: "数学/语文/英语/物理/化学"
  },
  mutations: {
    teashow(state, show) {
      console.log(show);
      if (show == 'true') {
        state.teaShow = true
        console.log(state.teaShow);
      } else {
        state.teaShow = false
      }
    },
    changesub(state, val) {
      state.subject = val
      // if (state.subject == "") {
      //   state.subject += val;
      // } else {
      //   state.subject += "/" + val;
      // }
    }

  },
  actions: {},
  modules: {
    loginStore,
    teachers
  },
  plugins: [createPersistedState()]
})