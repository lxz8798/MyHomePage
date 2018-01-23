<template>
	<div id="Carousel" v-on:mouseover="defalueComp" v-on:mouseleave="CLeave">
		<div class="HomeCount" v-model="Count">
			<span class="CountH3">{{Count}}</span>
			<span>秒之后。。。</span>
		</div>
		<el-carousel trigger="click" :interval="8000" arrow="never">
	    <el-carousel-item v-for="(item,index) in items">
			    	<home-info class="transition-box">
			    		<span slot="BigTitle">{{item.BigTitle}}</span>
			    		<span slot="BigDes1">{{item.BigDes1}}</span>
			    		<span slot="BigDes2">{{item.BigDes2}}</span>
			    		<span slot="BigDes3">{{item.BigDes3}}</span>
			    		<span slot="BigDes4">{{item.BigDes4}}</span>
			    		<span slot="BigDes5">{{item.BigDes5}}</span>
			    		<span slot="BigDes6">{{item.BigDes6}}</span>
			    		<span slot="BigDes7">{{item.BigDes7}}</span>
			    		<span slot="BigDes8">{{item.BigDes8}}</span>
			    	</home-info>
	      <img :src="item.img" :alt="item.BigTitle" />
	    </el-carousel-item>
	  </el-carousel>
	</div>
</template>

<script>
import HomeInfo from './HomeInfo.vue';
export default {
	components:{HomeInfo},
	data () {
		return {
		CountDown:{},
		timeline:'',
		Count:5,
		show2:true,
		items:[
	        {
	        	BigTitle:'整站使用了以下技术栈',
	        	BigDes1:'Vue+VueRouter+JS+GSAP+Axios+NodeJS+KOA2+MongoDB+Webpack+Github',
	        	BigDes2:'Vue(VueRouter/Store/ElementUI)-构建网站整体、路由和数据中心等等',
	        	BigDes3:'Axios/NodeJS/KOA2-整站的请求和响应',
	        	BigDes4:'MongoDB-能更好的配合Nodejs的数据库',
	        	BigDes5:'Webpack-打包工具，超方便的Loader',
	        	BigDes6:'GitHub-版本管理',
	        	BigDes7:'......',
	        	BigDes8:'...',
	          	img:require('../assets/img/ps1.jpg')
	        },
	        {
    			BigTitle:'整站使用了以下技术栈222',
	          	img:require('../assets/img/ps2.jpg')
	        },
	        {
        		BigTitle:'整站使用了以下技术栈333',
	          	img:require('../assets/img/ps3.jpg')
	        }
	      ]
		}
	},
	methods: {
	defalueComp() {
			let that = this;
			clearTimeout(this.timeline);
			that.timeline = setTimeout(function(){
				that.$store.commit('isShow','SvgIco');
				return this.timeline
			},5000);
			this.timeline = that.timeline;

			clearInterval(that.CountDown);
	    that.CountDown = setInterval(function () {
	      let c = that.Count--;
	      if(c === 1) {
	        clearInterval(that.CountDown);
	        this.CountDown = that.CountDown;
	        return this.CountDown
	      }
	    },1000)
	  },

	  CLeave () {
	  	this.Count = 5;
	  	clearTimeout(this.timeline);
			clearInterval(this.CountDown);
	  }
  }
} 
</script>

<style lang="scss" scoped>
@import './src/style/scss/Carousel.scss';

</style>