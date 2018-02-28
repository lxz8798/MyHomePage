<template>
	<div id="PhotoComp">
		<header-nav></header-nav>
		<div class="PhotoCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">PhotoGr</span>
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
				{ src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1774593968,305449206&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=546683621,3971380670&fm=27&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2394834204,2281852975&fm=27&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1370766075,3500160057&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=803231833,996548669&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3656522363,3541868681&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3676894514,875050911&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=368631557,1113342391&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=642175484,1287611074&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				{ src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1843104863,1757523106&fm=200&gp=0.jpg',link:'#',info: '图片资源来自于互联网' },
				// { src: require('../assets/photogr/11.jpg'),link:'#',info: '一些图片描述文字' },
				// { src: require('../assets/photogr/12.jpg'),link:'#',info: '1111111111' },
				// { src: require('../assets/photogr/13.jpg'),link:'#',info: '22222222222222222' },
				// { src: require('../assets/photogr/14.jpg'),link:'#',info: '333333333333333' },
				// { src: require('../assets/photogr/15.jpg'),link:'#',info: '444444444444444444' },
				// { src: require('../assets/photogr/16.jpg'),link:'#',info: '55555555555' },
				// { src: require('../assets/photogr/17.jpg'),link:'#',info: '66666666666666' },
				// { src: require('../assets/photogr/18.jpg'),link:'#',info: '77777777777777777777777' },
				// { src: require('../assets/photogr/19.jpg'),link:'#',info: '88888888888888888888888888' },
				// { src: require('../assets/photogr/20.jpg'),link:'#',info: '999999999999999999999' }
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
@import '../style/scss/Photo.scss';
</style>

