import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/store/loginStore'
import teachers from '@/store/LYX'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teaShow: false, //弹窗的显示隐藏
    follow: true, //关注、取消关注
    subject: "数学/语文/英语/物理/化学"
  },
  mutations: {
    // 控制弹窗的显示隐藏
    teashow(state, show) {
      console.log(show);
      if (show == 'true') {
        state.teaShow = true
        console.log(state.teaShow);
      } else {
        state.teaShow = false
      }
    },
    // 控制关注或取消关注的显示隐藏
    follow(state, val) {
      
      if (val == 'true') {
        state.follow = true
        console.log(state.follow);
      } else {
        state.follow = false
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