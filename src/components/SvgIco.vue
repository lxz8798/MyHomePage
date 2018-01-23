<template>
<div id="SvgIco">
	
	<svg viewBox="0 -50 850 730" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<g><polygon class="yl2" fill="white" stroke="none" points="0,120 400,660 60,430 120,340 20,320 0,120" /></g>
		<g><polygon class="yl3" fill="white" stroke="none" points="0,120 400,660 60,430 120,340 20,320 0,120" transform="matrix(-1,0,0,1,800,0)" /></g>
		<g><polygon class="nei" fill="hsla(210,60%,6%,1)" stroke="none" points="80,0 720,0 800,120 400,660 0,120" /></g>
		<g><polygon class="ld1" fill="hsla(220,60%,8%,1)" stroke="hsla(210,50%,4%,1)" points="300,145 270,260 310,370 490,370 530,260 500,145" /></g>
		<g><polygon class="ld2" fill="hsla(220,60%,8%,1)" stroke="hsla(210,50%,4%,1)" points="490,370 550,458 400,660 250,458 310,370" /></g>
		<g><polygon class="yl1" fill="white" stroke="none" points="0,120 80,0 320,140 280,340" /></g>
		<g><polygon class="yl4" fill="white" stroke="none" points="0,120 80,0 320,140 280,340" transform="matrix(-1,0,0,1,800,0)" /></g>
		<g class="tipSquare" stroke="hsla(220,50%,80%,.3)" stroke-width="10">
			<polygon points="565,585 590,630 630,610" fill="white"/>
			<rect x="580" y="600" rx="10" ry="10" width="360" height="60" fill="white"/>
		</g>
		<g><text class="svgText" x="600" y="638" fill="hsla(220,60%,8%,1)" stroke-width="0" style="font-size:15px;">{{msg}}</text></g>
	</svg>
	<div class="buttonBox">
		<el-button plain class="backB" @click="SVGReverse">返回</el-button>
	</div>
</div>
</template>

<script>
import $ from 'jquery';
export default {
	name:'SvgIco',
	data (){
		return {
			tl:'',
			msg:'大家好,我是李啸竹,这里展示了我所会的一些技能!'
		}
	},
	mounted () {
		this.svgAnimate();
	},
	methods:{
		svgAnimate:function (tline) {
			let that = this;
			this.tl = that.tl;
			that.tl = new TimelineLite({onComplete:this.A,onReverseComplete:this.B});
								that.tl.from('.yl1',0.8,{rotation:30,skewX:100,transformOrigin:"50% 30%",opacity:0,ease:Bounce.easeOut})
								.from('.yl2',0.8,{rotation:30,skewX:50,transformOrigin:"50% 50%",opacity:0,ease:Bounce.easeOut},"-=0.5")
								.from('.yl3',0.8,{rotation:20,skewY:80,transformOrigin:"60% 80%",opacity:0,ease:Bounce.easeOut},"-=0.5")
								.from('.yl4',0.8,{skewY:230,transformOrigin:"0% 30%",opacity:0,ease:Bounce.easeOut},"-=0.5")
								.from('.ld1',0.8,{scale:(4.4),transformOrigin:"50% 50%",opacity:0,ease:Bounce.easeOut},"-=0.5")
								.from('.ld2',0.8,{skewY:300,transformOrigin:"50% 50%",opacity:0,ease:Bounce.easeOut},"-=0.5")
								.from('.nei',0.8,{rotationX:"360deg",scale:(2,2),opacity:0,transformOrigin:"50% 50%"},"-=0.5")
								.from('.tipSquare',0.8,{rotation:"-120deg",scale:(0.1,0.1),opacity:0,transformOrigin:"top left",ease:Bounce.easeOut},"-=0.5")
								.from(".buttonBox", 0.8, {rotationX:200,scale:(5,5),opacity:0},"-=0.5");
								
								return that.tl;
		},
		SVGReverse:function (){			
			this.tl.reverse();
			return
		},
		A:function(){
			console.log('complete!')
		},
		B:function(){
			this.$store.commit('isShow','Carousel');
		}
	}
}
</script>

<style lang="scss">
@import '../style/mixin/mixin.scss';
@import '../style/scss/SvgIco.scss';

</style>