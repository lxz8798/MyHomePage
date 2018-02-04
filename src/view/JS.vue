<template>
	<div id="JSComp">
		<header-nav></header-nav>

		<div class="JSCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">JS</span>
				</template>
			</bread-crumb>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
			</div>

			<div class="JSTag">
				<el-tag v-for="item in JSTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>

			<content-comp 
				scoped="props" 
				:info-box="infoBox" 
				:p-box="pBox" 
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
export default {
		components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
		data () {
		return {
			name:'JS',
			contentUl:[
				{	
					h1:'首先感谢NodeJS,让我从前端设计转职成全栈设计，But。。',
					h2:'在学习过程我遇到了很多坑',
					h3:'就来说说我今天遇到的坑，网上有很多资料，都说在CentOS下安装NodeJS要先安装GCC,MPFR，MFC等，拿阿里云来说，阿里云的CentOS7是自带GCC4.8的，如果感觉版本太低去重新安装或更新GCC，就被坑了，运气好也许过了，也许不行你会得到一堆报错，正确的应该是直接安装NodeJS。',
					flag:true
				}
			],
			infoBox:[
				{
					id:1,
					ulName:'moreList_1',
					data:[
						{ id:1,num_0:'num_1',value:'1.',name:'info_1',txt:'yum install -y gcc make gcc-c++ openssl-devel wget' }						
					]
				}
			],
			pBox:[
				{	
					
					data:[
						{ id:1,pname:'pnum_1',ptxt:'下载nodejs源码包,可以在下载页面https://nodejs.org/dist/中找到下载地址。然后执行指令' },
					]
				}
			],
			JSTag:[
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
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
$JSPage:3;
div#JSComp {
	width:$WBox;
	height:$HBox * $JSPage;
	min-height:$HBox;
	@include FC(flex,column,center,center)
	div.JSCompBox {
		width:$WBox;
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
		div.JSTag {
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

