<template>
<div id="PicImgRow">
	<div class="l">
		<h2><slot name="H3Title">暂时没有更新内容</slot></h2>
		<p class="p1"><slot name="TextFirst">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis eos ut, veritatis ad eaque quaerat, </slot></p>
		<p><slot name="TextSecond">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis eos ut, veritatis ad eaque quaerat, quidem</slot></p>
		<p><slot  class="TextThirth" name="TextThirth">Lorem ipsum dolor sit amet harum esse, laborum ipsam aspernatur! Fugiat velit earum fuga eaque quisquam hic quod!</slot></p>
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
		<slot name="ImgFirst"><img :src="img" /></slot>
	</div>
</div>
</template>

<script>

export default {
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