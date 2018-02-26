<template>
	<div id="AtlasComp">
		<div class="AtlasCompBox">
			<h1 class="BigT">Photo Aggregate</h1>

			<ul class="ul1">
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
			</ul>

			<ul class="ul2">
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
			</ul>

			<ul class="ul3">
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
				<li><i class="iconfont icon-iconset0239"></i></li>
			</ul>

		</div>
	</div>
</template>

<script>
import TextAndPic from './TextAndPic.vue';
export default {
  	name:'boxtwo',
  	components:{TextAndPic},
  	data () {
		return {
			currentDate: new Date()
		}
	}
}
</script>

<style lang="scss" scoped>
@import './src/style/scss/Atlas.scss';

</style>