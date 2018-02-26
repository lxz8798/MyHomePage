<template>
	<div id="ScssComp">
		<header-nav></header-nav>
		<div class="ScssCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">SCSS</span>
				</template>
			</bread-crumb>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间:2018/2/26</span>
			</div>

			<div class="ScssTag">
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
	name:'scss',
	data () {
		return {
			code:`我这个站点用过的一些配置：
@mixin FC ($flex,$derection,$alignX,$alignY){
	@if $flex == flex {
		display:$flex;
		flex-direction:$derection;
		align-items:$alignX;
		justify-content:$alignY;		
	}
	@if $derection == row {
		flex-direction:$derection;
		align-items:$alignX;
		justify-content:$alignY;		
	}
	@else if $derection == column {
		flex-direction:$derection;
		align-items:$alignX;
		justify-content:$alignY;		
	}
	
}

因为使用的是flex布局，就把居中给配置成mixin了。

一些公共的样式
$FontSize:12px;
$FB:bold;
$FF:"Microsoft YaHei","微软雅黑","Arial","黑体";
$WBox:100vw;
$HBox:100vh;
$Page:2;
$CompBoxSpace:12vw;
$BoxPT:15vh;
/*Color-HSLA*/

$Gray:#cecece;
$Hue:#aefd12;
html,
body {
  width: $WBox;
  height:$HBox;
  min-height:$HBox;
  overflow-x:hidden;
  color:#434343;
}

div#app {
	width: $WBox;
	height: $HBox;
	min-height:$HBox;
}

body {
  padding: 0;
  margin: 0;
  font-size: $FontSize;
  font-family: $FF;
}

ul,
li {
  list-style-type: none;
}

a {
  text-decoration: none; // color:hsla($HColor,$SColor,$LColor,$AColor);
  color: $Hue;
}

a:hover {
  color: darken($Hue, 10%);
}

			`,
			cmOptions:{
	      		tabSize: 4,
		        styleActiveLine: true,
		        lineNumbers: true,
		        line: true,
		        mode: 'scss',
		        lineWrapping: true,
		        readOnly:'nocursor',
		        theme:'Monokai'
	      	},
	      	contentUl:[
				{	
					h1:'SCSS是css拓展，相比CSS，增加了更多更接近编程的语法，如嵌套、变量、混合、选择器继承等。',
					h2:'想玩好scss也是需要长时间的使用，多看一些大神的写法，多看一些框架的写法。',
					h3:'scss和sass 就是有没有`{}`的区别，而且 less变量符是@，scss是$，变量作用域好像也有点不一样，我一般更习惯用scss。',
					flag:true
				}
			],
			AxiosTag:[
				{
					type:'success',
					tag:'scss'
				},
				{
					type:'info',
					tag:'css'
				},
				{
					type:'warning',
					tag:'less'
				},
				{
					type:'danger',
					tag:'sass'
				}
			]
		}
	}
}
</script>

<style lang="scss">
@import '../style/scss/Scss.scss';
</style>

