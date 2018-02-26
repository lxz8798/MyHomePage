<template>
	<div id="NodeJSComp">
		<header-nav></header-nav>

			<div class="NodeJSCompBox">
				<bread-crumb>
					<template scoped="props">
						<span slot="Bread_2">NodeJS</span>
					</template>
				</bread-crumb>

				<div class="AuthorInfo">
					<span><i class="el-icon-edit"></i>作者：站长</span>
					<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
				</div>

				<div class="NodeJSTag">
					<el-tag v-for="item in NodeJSTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
				</div>

				<content-comp 
					scoped="props" 
					:info-box="infoBox" 
					:p-box="pBox" 
					:content-ul="contentUl" 
					id="1">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_1" 
					:p-box="pBox_1" 
					id="2">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_2" 
					:p-box="pBox_2" 
					id="2">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_3" 
					:p-box="pBox_3" 
					id="2">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_4" 
					:p-box="pBox_4" 
					id="2">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_5" 
					:p-box="pBox_5" 
					id="2">
				</content-comp>

				<content-comp 
					scoped="props" 
					:info-box="infoBox_6" 
					:p-box="pBox_6" 
					id="2">
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
			infoBox_1:[
				{
					id:2,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'wget https://nodejs.org/dist/(版本号)/node-(版本号)-linux-x64.tar.xz' }
					]
				}
			],
			pBox_1:[
				{	
					
					data:[
						{ id:1,pname:'pnum_1',ptxt:'解压源代码包' },
					]
				}
			],
			infoBox_2:[
				{
					id:2,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'tar -xf node-v9.3.0.tar.gz' }
					]
				}
			],
			pBox_2:[
				{	
					
					data:[
						{ id:1,pname:'pnum_1',ptxt:'开始编译，先进入源代码所在路径' },
					]
				}
			],
			infoBox_3:[
				{
					id:3,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'cd node-v9.3.0' }
					]
				}
			],
			pBox_3:[
				{	
					
					data:[
						{ id:3,pname:'pnum_1',ptxt:'先执行配置脚本' },
					]
				}
			],
			infoBox_4:[
				{
					id:4,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'./configure' }
					]
				}
			],
			pBox_4:[
				{	
					
					data:[
						{ id:4,pname:'pnum_1',ptxt:'编译与部署' },
					]
				}
			],
			infoBox_5:[
				{
					id:5,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'make' },
						{ id:2,num_0:'num_3',value:'3.',name:'info_3',txt:'make install' }
					]
				}
			],
			pBox_5:[
				{	
					
					data:[
						{ id:1,pname:'pnum_1',ptxt:'完成以后就可以测试是否安装成功了' },
					]
				}
			],
			infoBox_6:[
				{
					id:6,
					ulName:'moreList_2',
					data:[
						{ id:1,num_0:'num_3',value:'3.',name:'info_3',txt:'node -v' },
						{ id:2,num_0:'num_3',value:'3.',name:'info_3',txt:'npc -v' }
					]
				}
			],
			pBox_6:[
				{	
					
					data:[
						{ id:1,pname:'pnum_1',ptxt:'' },
					]
				}
			],
			moreList:[
					{
						ListNum:[
							{ num_0:'num_1',value:'1.',name:'info_1',txt:'111111' }
						]
					}
			],
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
			]
		}
	}
}
</script>

<style lang="scss" scoped>

@import '../style/scss/NodeJS.scss';

</style>

