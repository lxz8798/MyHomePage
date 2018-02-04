import Vue from 'vue';
import axios from 'axios';
import apiSetting from './api/apiSetting.js';
import * as mockData from '../mock/index.js'
import router from './router/index.js';
import $ from 'jquery';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import qs from 'qs';
import '../theme/index.css';
import 'mavon-editor/dist/css/index.css';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import mavonEditor from 'mavon-editor'

Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(VueCodemirror);

import HomePage from './components/MyHomePage.vue';

//挂载axios到prototype上，全局使用
Vue.prototype.$axios = axios;
Vue.prototype.apiSetting = apiSetting;

Vue.config.productionTip = false;

Vue.filter('getYMD',(input) => {
	return input.split(' ')[0];
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<HomePage/>',
  components: { HomePage }
})