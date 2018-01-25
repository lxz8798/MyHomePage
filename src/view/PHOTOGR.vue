<template>
	<div id="PhotoComp">
		<header-nav></header-nav>
		<div class="PhotoCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">PhotoGR</span>
				</template>
			</bread-crumb>
			<!-- <div class="Bread">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/' }"><slot name="Bread_1">首页</slot></el-breadcrumb-item>
				  <el-breadcrumb-item><slot name="Bread_2">NodeJS</slot></el-breadcrumb-item>
				</el-breadcrumb>
			</div> -->

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
			</div>

			<div class="NodeJSTag">
				<el-tag v-for="item in Tag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>

			<vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
				<template scope="props">
					<p class="some-info" slot="some-info">{{props.value.info}}</p>
				</template>
			</vue-waterfall-easy>

		</div>

		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import vueWaterfallEasy from '../components/vueWaterfallEasy.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
export default {
	components:{HeaderNav,MyFooter,vueWaterfallEasy,BreadCrumb},
	data () {
		return {
			centerDialogVisible: false,
			imgsArr: [
				{ src: `./images/photogr/1.jpg`,link: '#', info: '一些图片描述文字' },
				{ src: `./images/photogr/2.jpg`,link:'#',info: '1111111111' },
				{ src: `./images/photogr/3.jpg`,link:'#',info: '22222222222222222' },
				{ src: `./images/photogr/4.jpg`,link:'#',info: '333333333333333' },
				{ src: `./images/photogr/5.jpg`,link:'#',info: '444444444444444444' },
				{ src: `./images/photogr/6.jpg`,link:'#',info: '555555555555555555555555555555' },
				{ src: `./images/photogr/7.jpg`,link:'#',info: '66666666666666' },
				{ src: `./images/photogr/8.jpg`,link:'#',info: '77777777777777777777777' },
				{ src: `./images/photogr/9.jpg`,link:'#',info: '88888888888888888888888888' },
				{ src: `./images/photogr/10.jpg`,link:'#',info: '999999999999999999999' }
			], 				//存放所有已加载图片的数组（即当前页面会加载的所有图片）
			fetchImgsArr: [], 			//存放每次滚动时下一批要加载的图片的数组
			Tag:[
				{
					type:'success',
					tag:'Photo'
				},
				{
					type:'info',
					tag:'照片集'
				},
				{
					type:'warning',
					tag:'PS'
				},
				{
					type:'',
					tag:'PS后期'
				}
			]
		}
	},
	methods: {
	    // 假数据
	    // initImgsArr(n, m) { //num 图片数量
	    //   var arr = []
	    //   for (var i = n; i < m; i++) {
	    //     arr.push({ src: `./images/photogr/${i + 1}.jpg`, link: '#', info: '一些图片描述文字' })
	    //   }
	    //   return arr
	    // },
	    fetchImgsData() {
	      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
	    }
	  },
	  // created() {
	  //   this.imgsArr = this.initImgsArr(0, 10)
	  //   this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的新的图片的数据数据
	  // },
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
$NodeJSPage:3;
div#PhotoComp {
	width:$WBox;
	height:$HBox * $NodeJSPage;
	min-height:$HBox;
	@include FC(flex,column,center,center)
	div.PhotoCompBox {
		width:$WBox - $CompBoxSpace;
		height:$HBox * $NodeJSPage;
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
		div.NodeJSTag {
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

