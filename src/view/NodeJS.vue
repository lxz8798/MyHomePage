<template>
	<div id="NodeJSComp">
		<header-nav></header-nav>

			<div class="NodeJSCompBox">
				<div class="Bread">
					<el-breadcrumb separator="/">
					  <el-breadcrumb-item :to="{ path: '/' }"><slot name="Bread_1">首页</slot></el-breadcrumb-item>
					  <el-breadcrumb-item><slot name="Bread_2">NodeJS</slot></el-breadcrumb-item>
					</el-breadcrumb>
				</div>

				<div class="AuthorInfo">
					<span><i class="el-icon-edit"></i>作者：站长</span>
					<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
				</div>

				<div class="NodeJSTag">
					<el-tag v-for="item in NodeJSTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
				</div>

				<content-comp :content-ul="ContentUl" v-for="item in ContentUl">
					<h1 slot="ContentH1">{{item.h1}}</h1>
					<h2 slot="ContentH2">{{item.h2}}</h2>
					<h3 slot="ContentH3">{{item.h3}}</h3>
					
				</content-comp>
			</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import ContentComp from '../components/ContentComp.vue';

export default {
	components:{HeaderNav,MyFooter,ContentComp},
	data () {
		return {
			NodeJSTag:[
				{
					type:'success',
					tag:'nodejs'
				},
				{
					type:'info',
					tag:'centos'
				},
				{
					type:'warning',
					tag:'gcc'
				},
				{
					type:'danger',
					tag:'wget'
				}
			],
			ContentUl:[
				{	
					h1:'首先感谢NodeJS,让我从前端设计转职成全栈设计，But。。',
					h2:'在学习过程我遇到了很多坑',
					h3:'就来说说我今天遇到的坑，网上有很多资料，都说在CentOS下安装NodeJS要先安装GCC,MPFR，MFC等，拿阿里云来说，阿里云的CentOS7是自带GCC4.8的，如果感觉版本太低去重新安装或更新GCC，就被坑了，运气好也许过了，也许不行你会得到一堆报错，正确的应该是直接安装NodeJS。',
					flag:true,
					info:[
						{
							infoFlag:true,
							infoI:'全局安装部署NodeJS，安装gcc，make，openssl，wget',
							infoII:'yum install -y gcc make gcc-c++ openssl-devel wget',
							infoIII:'下载nodejs源码包,可以在下载页面https://nodejs.org/dist/中找到下载地址。然后执行指令',
							infoIV:'wget https://nodejs.org/dist/(版本号)/node-(版本号)-linux-x64.tar.xz',
							infoV:'解压源代码包',
							infoVI:'tar -xf node-v9.3.0.tar.gz',
							infoVII:'开始编译，先进入源代码所在路径',
							infoVIII:'cd node-v9.3.0',
							infoIX:'先执行配置脚本',
							infoX:'./configure',
							infoXI:'编译与部署',
							infoXII:'make && make install',
							infoXIII:'完成以后就可以测试是否安装成功了',
							infoXIV:'node -v & npc -v'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
@import '../style/scss/NodeJS.scss';
</style>

