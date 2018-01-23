import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import router from './router/index.js';
import $ from 'jquery';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import '../theme/index.css';

Vue.use(ElementUI);

import HomePage from './components/MyHomePage.vue';

Vue.config.productionTip = false

// Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  store,
  template: '<HomePage/>',
  components: { HomePage }
})
