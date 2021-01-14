import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/js/rem'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
<<<<<<< HEAD
=======


>>>>>>> 3db33135cbe0125f53020c4fe5c483d33a28506d
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
