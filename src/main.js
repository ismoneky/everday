import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/js/rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import loading from '@/components/loading/index.js'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(loading)

Vue.use(Vant);

import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')