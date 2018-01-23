<template>
<div id="BoxFour">
	<text-and-pic>
		<div slot="H3Title">这里是标题</div>
		<p slot="TextFirst">换掉你第一个文本</p>
		<p slot="TextSecond">再换掉你第二个文本</p>
		<span slot="ImgFirst"></span>
	</text-and-pic>
</div>
</template>

<script>
import TextAndPic from './TextAndPic.vue';
export default {
	components:{TextAndPic},
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
@import '../style/scss/BoxFour.scss';
</style>