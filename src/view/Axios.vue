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
				<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
			</div>

			<div class="AxiosTag">
				<el-tag v-for="item in AxiosTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>

			<content-comp 
				scoped="props" 
				:content-ul="contentUl" 
				id="1">
			</content-comp>

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
			contentUl:[
				{	
					h1:'首先感谢NodeJS,让我从前端设计转职成全栈设计，But。。',
					h2:'在学习过程我遇到了很多坑',
					h3:'就来说说我今天遇到的坑，网上有很多资料，都说在CentOS下安装NodeJS要先安装GCC,MPFR，MFC等，拿阿里云来说，阿里云的CentOS7是自带GCC4.8的，如果感觉版本太低去重新安装或更新GCC，就被坑了，运气好也许过了，也许不行你会得到一堆报错，正确的应该是直接安装NodeJS。',
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
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
$AxiosPage:3;
div#AxiosComp {
	width:$WBox;
	height:$HBox * $AxiosPage;
	min-height:$HBox;
	@include FC(flex,column,center,center)
	div.AxiosCompBox {
		width:$WBox - $CompBoxSpace;
		height:auto;
		padding-top:$BoxPT;
		display:inline-flex;
		flex-direction:column;
		flex:1;
		div.Bread,div.AuthorInfo {
			width:$WBox;
			height:5vh;
			line-height: 5vh;

		}
		div.Bread {
			
			
		}
		div.AuthorInfo {
			i {
				padding-right:5px;
			}
		}
		div.AxiosTag {
			width:$WBox;
			height:10vh;
			display:inline-flex;
			align-items:center;
			span {
				margin-right:1vw;
			}
		}
	}
}
</style>

