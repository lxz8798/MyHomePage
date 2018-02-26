<template>
	<div id="VueHtmlComp">
		<header-nav></header-nav>

			<div class="VueHtmlCompBox">
				<bread-crumb>
					<template scoped="props">
						<span slot="Bread_2">VueHtml</span>
					</template>
				</bread-crumb>

				<div class="AuthorInfo">
					<span><i class="el-icon-edit"></i>作者：站长</span>
					<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
				</div>

				<div class="VueHtmlTag">
					<el-tag v-for="item in VueHtmlTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
				</div>
				
				<content-comp 
					scoped="props" 
					:content-ul="contentUl" 
					id="1">
				</content-comp>

				<h3>整合markDown在线编辑器，暂时无法保存，后期开放。</h3>

				<mavon-editor v-model="value" :ishljs = "true" :toolbarsFlag="true" :editable="true" />
				
				<h3>整合codeMirror在线编辑器，禁止了编辑功能</h3>
					
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

		data () {
		return {
			code:`
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── assets                 // 字体图标等静态资源
│   ├── components             // 组件
│   ├── api                    // 接口
│   ├── router                 // 路由
│   ├── store                  // vuex
│   ├── style                  // 样式
│   ├── utils                  // 公用方法
│   ├── view                   // 页面视图
│   ├── vuex                   // vuex
│   ├── theme                  // elementUI 主题库
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口加载组件 初始化等
├── static                     // 静态资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package.json               // package.json
├── element-variables.scss     // elementUI 公共样式	
└── webpack.config             // webpack 配置
      `,
   			// default_open:'edit',
   			ishljs:false,
   			code_style:'atelier-plateau-light',
      		value:`

# 标题1
## 标题2
### 标题3
#### 标题4
##### 标题5
###### 标题6

有序列表
1.
2.
3.
...
无序列表
-
-
...

> 1级
>> 2级
>>> 3级
...

~~删除线~~


[链接](www.baidu.com)
![图片描述](http://www.image.com)
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
      	contentUl:[
				{	
					h1:'接触了Vue-MVVM(Model-View-ViewModel)以后，发现原来写代码可以这么简单便捷',
					h2:'数据驱动，数据响应式，组件化，生命周期都极大的更便捷的提高了工作效率',
					h3:'配合NodeJS，更是实现了赋予了个人全栈能力，使用Vue要改变以前的观念，不在操作DOM，ViewModel的双向绑定，变化直接体现在DOM上。VUE有强大的插件资源，能极大的缩减项目进度，还有Webpack做压缩分离，所以，接下来很长一段时间，我就认Vue和NodeJS了。',
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
			VueHtmlTag:[
				{
					type:'success',
					tag:'Vue'
				},
				{
					type:'info',
					tag:'Vuex'
				},
				{
					type:'warning',
					tag:'Store'
				},
				{
					type:'danger',
					tag:'html5'
				}
			]
		}
	},
	mounted(){
	},
	method:{
		
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
@import '../style/scss/VueHTML.scss';

</style>

