import Vue from 'vue';
import axios from 'axios';
import router from './router/index.js';
import $ from 'jquery';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import '../theme/index.css';

Vue.use(ElementUI);

import HomePage from './components/MyHomePage.vue';

Vue.config.productionTip = false

Vue.prototype.$http = axios;
axios.defaults.baseURL = '/api'

new Vue({
  el: '#app',
  router,
  store,
  template: '<HomePage/>',
  components: { HomePage }
})
