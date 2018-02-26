<template>
	<div id="MongooseComp">
		<header-nav></header-nav>
		<div class="MongooseCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">Mongoose</span>
				</template>
			</bread-crumb>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间 : 2018/2/26</span>
			</div>

			<div class="MongooseTag">
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
export default {
	components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
	name:'Mongoose',
	data () {
		return {
			code:`Mongoose有坑，要常填。。
Mongoose本身是可以直接返回Promise的，只需要使用.exec()
安装：
npm install mongoose --save

const mongoose = require('mongoose');
const testUserInfo = require('./../models/users.js');
const url = "mongoose.connect("mongodb://localhost/test";

const options = {
	user:'xxxx',
	pass:'xxxxxx'
}
/**
 * 连接
 */
mongoose.connect(url,options,(err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('连接成功!');
	}
});
/**
 * 连接错误
 */
mongoose.connection.on("error",() => {
	console.log("mongoDB connected fail.")
});
/**
 * 连接打开
 */
mongoose.connection.on("open",(callback) => {
	console.log("mongoDB connected access");
});
/**
 * 连接断开
 */
mongoose.connection.on("disconnected",() => {
	console.log("mongoDB connected disconnected.")
});

module.exports = mongoose;

`,
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
	      	currentDate: new Date(),
			contentUl:[
				{	
					h1:'使用mongodb做数据库的话，操作工具当然还是mongoose来的好。',
					h2:'Mongoose有三个重要的概念，Schema、Model、Document。',
					h3:'mongoose本身并不是很难，多用几次就熟练了。',
					flag:true
				}
			],

			AxiosTag:[
				{
					type:'success',
					tag:'Mongodb'
				},
				{
					type:'info',
					tag:'Mongoose'
				},
				{
					type:'warning',
					tag:'Schema'
				},
				{
					type:'danger',
					tag:'Model'
				},
				{
					type:'info',
					tag:'Document'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Mongoose.scss';
</style>