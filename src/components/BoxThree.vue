<template>
<div id="BoxThree">
	<text-and-pic>
		<div slot="H3Title">这里是标题</div>
		<p slot="TextFirst">换掉你第一个文本</p>
		<p slot="TextSecond">再换掉你第二个文本</p>
		<span slot="ImgFirst"><img :src="img" /></span>
	</text-and-pic>
</div>
</template>

<script>
import TextAndPic from './TextAndPic.vue';
export default {
	components:{TextAndPic},
	data () {
		return {

			img:'http://b.hiphotos.baidu.com/image/h%3D300/sign=03d791b0e0c4b7452b94b116fffd1e78/58ee3d6d55fbb2fb4a944f8b444a20a44723dcef.jpg'
		}
	}
}
</script>

<style lang="scss">
@import '../style/scss/BoxThree.scss';
</style>