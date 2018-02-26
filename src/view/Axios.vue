<template>
	<div id="AxiosComp">
		<header-nav></header-nav>

		<div class="AxiosCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">Axios</span>
				</template>
			</bread-crumb>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间 : 2018/1/23</span>
			</div>

			<div class="AxiosTag">
				<el-tag v-for="item in AxiosTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>

			<content-comp 
				scoped="props" 
				:content-ul="contentUl" 
				id="1">
			</content-comp>

			<codemirror v-model="code" :options="cmOptions" :value="code" ></codemirror>

		</div>
		
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import ContentComp from '../components/ContentComp.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
import http from '../api/httpAxios.js';
export default {
		components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
		data () {
		return {
			name:'Axios',
			code:`import axios from 'axios'
import {Message} from 'element-ui'

//这个封装来自于https://segmentfault.com/a/1190000012804684

axios.interceptors.request.use(config=> {
  return config;
}, err=> {
  Message.error({message: '请求超时!'});
  return Promise.resolve(err);
})
axios.interceptors.response.use(data=> {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({message: data.data.msg});
    return;
  }
  return data;
}, err=> {
  if (err.response.status == 504||err.response.status == 404) {
    Message.error({message: '您的请求被服务器吃了⊙﹏⊙∥'});
  } else if (err.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  }else {
    Message.error({message: '未知错误!'});
  }
  return Promise.resolve(err);
})

let base = 'http://localhost:3000';

export const postRequest = (url, params,callback) => {
  return axios({
    method: 'post',
    url: '\${base}\${url}',
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: '\${base}\${url}',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: '\${base}\${url}',
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: '\${base}\${url}'
  });
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: '\${base}\${url}'
  });
}

如何使用：
在入口文件里
import {getRequest} from './api/httpAxios';
import {postRequest} from './api/httpAxios';
import {deleteRequest} from './api/httpAxios';
import {putRequest} from './api/httpAxios';

Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
`
,
			cmOptions:{
	      		tabSize: 4,
		        styleActiveLine: true,
		        lineNumbers: true,
		        line: true,
		        mode: 'text/javascript',
		        lineWrapping: true,
		        readOnly:'nocursor',
		        theme:'Monokai'
	      	},
			contentUl:[
				{	
					h1:'自己这个站点中用到的Axios，默认配置，感觉挺好用，留作以后他用。',
					flag:true
				}
			],

			AxiosTag:[
				{
					type:'success',
					tag:'Axios'
				},
				{
					type:'info',
					tag:'get'
				},
				{
					type:'warning',
					tag:'post'
				},
				{
					type:'danger',
					tag:'response'
				},
				{
					type:'info',
					tag:'request'
				}
			]

		}
	},
	mounted(){
		http(this.apiSetting.axiosData)
	    .then(res =>{
	        // console.log(res.data);
	        // console.log(this.apiSetting.axiosData);
	        this.axiosData = res.data;
	        console.log(this.axiosData);
	        // this.$store.commit("loadProject", res.data.data);
	    },
	    error =>{
	        console.log(error);
	    })
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Axios.scss';
</style>

