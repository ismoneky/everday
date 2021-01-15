import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teaShow: false,
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

  },
  actions: {},
  modules: {}
})