<template>
<div id="PicImgRow">
	<div class="l">
		<p class="Blank"></p>
		<h2><slot name="H3Title">暂时没有更新内容</slot></h2>
		<ul>
			<li><slot name="txt1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolorem autem quaerat veritatis iusto, dignissimos et repudiandae, aspernatur, asperiores debitis reiciendis doloremque accusamus. Accusamus nesciunt, nam totam praesentium amet necessitatibus?</slot></li>
			<li><slot name="txt2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat blanditiis eos quas</slot></li>
			<li><slot name="txt3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsum, a odit ex laborum perferendis beatae rem natus harum magnam error consequuntur quos aspernatur</slot></li>
		</ul>
		<!--<p><slot name="TextFourth">Lorem ipsum dolor sit amet quidem, harum esse, laborum ipsam aspernatur! Fugiat velit earum fuga eaque quisquam hic quod!</slot></p>
		<p><slot name="TextFifth">Lorem ipsum dolor sit amet</slot></p>
		<p><slot name="TextSixth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis eos ut, veritatis ad eaque quaerat</slot></p> -->
		<!-- <ul class="TextUL">
			<slot name="TextUL">
				<li v-for="item in TextUL">{{item.txt}}</li>
			</slot>
		</ul> -->
	</div>
	<div class="r">
		<scale-module></scale-module>
	</div>
</div>
</template>

<script>
import ScaleModule from '../components/S3D.vue';
export default {
	components:{ScaleModule},
	data () {
		return {
			// TextUL:[
			// 	{
			// 		txt:"This is LI text txt!",
			// 		img:"",
			// 		src:""
			// 	}
			// ],
			img:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3354152461,3508594870&fm=173&s=94A740B257A38B411476FFAB0300F005&w=218&h=146&img.JPEG'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/TextAndPic.scss';
</style>