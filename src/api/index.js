import Axios from 'axios';

const axios = new Axios();

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;

//请求拦截
axios.interceptors.request.use(config => {
	//请求之前，取消当前正在进行的相同请求

	if ($store.state.token) {
		config.headers.Authorization = `token ${$store.state.token}`
	}

	return config
},error => {
	return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
	return response
},error => {
	if (error && err.response) {
		switch (err.response.status) {
			case 400:
			err.message = "错误请求"
			break;
			case 401:
			err.message = "未授权，请重新登录"
			break;
			case 403:
			err.message = "拒绝访问"
			break;
			case 408:
			err.message = "请求超时"
			break;
			case 500:
			err.message = "服务端出错"
			break;
			case 501:
			err.message = "网络未实现"
			break;
			case 502:
			err.message = "网络出错"
			break;
			case 503:
			err.message = "服务不可用"
			break;
			case 505:
			err.message = "http不支持该请求"
			break;
			default:
			err.message = `连接错误${err.response.status}`
		}
	} else {
		err.message = "连接服务器失败"
	}

	message.error (err.message) 
	return Promise.resolve(error.response)
	
})

axios.default.baseURL = "/api"
//设置默认请求头
axios.default.headers = {
	'X-Requested-Width':'XMLHttpRequest'
}

axios.default.timeout = 10000

export default {
	//get请求
	get(url,res) {
		return new Promise((resolve, reject) => {
			axios({
				method:'get',
				url,
				parmas:res,
				// cancelToken: new CancelToken(c => {
				// 	cancel = c
				// })
			}).then(res => {
				resolve(res)
			})
		})
	},

	//post请求
	post(url,res) {
		return new Promise((resolve, reject) => {
			axios({
				method:'post',
				url,
				parmas:res,
				// cancelToken: new CancelToken(c => {
				// 	cancel = c
				// })
			}).then(res => {
				resolve(res)
			})
		})
	}
}

export const axiosPage = res => {
    return req.get('/axios',res)
}