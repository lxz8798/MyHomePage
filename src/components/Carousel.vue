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
    			BigTitle:'设计是门高深的学问,需要一辈子专研。',
    			BigDes1:'良好的用户体验可以决定客户的去留，理念适应于各种设计之上，PS/FW可以制作页面效果。',
	        	BigDes2:'网络上有很多可以提供设计思路的地方。',
	        	BigDes3:'输写代码以前使用DW，现在使用Sublime，更方便轻巧。',
	        	BigDes4:'如果能在设计元素里加入更全面的思考，那么设计出来的东西就更让容易让人接受，',
	        	BigDes5:'因此，在设计之初就要考虑到后期优化方面的点滴细节。',
	        	BigDes6:'代码输出和压缩能加快浏览速度，更有利于体验',
	        	BigDes7:'......',
	        	BigDes8:'...',
	          	img:require('../assets/img/ps2.jpg')
	        },
	        {
        		BigTitle:'技术是门脑力活,锻炼大脑有没有!',
    			BigDes1:'不需要太过专精，只需要简单点就可以在3维空间构思设计风格。',
	        	BigDes2:'如果有空闲时间，后期可以深入研究一下3D方面的内容。',
	        	BigDes3:'页面动效方面，以前是Flash，但是Flash渐渐退出以后，在页效方面其实有了更多选择。',
	        	BigDes4:'JS原生的Canvas写的动画不亚于Flash，还有GSAP推出的TweenLite、TweenMax更是流畅的写出页面动效。',
	        	BigDes5:'本点点就使用了TweenLite、TweenMax。',
	        	BigDes6:'一些细节方面的动效点缀能进到画龙点睛的效果。',
	        	BigDes7:'......',
	        	BigDes8:'...',
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