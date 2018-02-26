<template>
<div id="BoxTwo">
  	<h1 class="BigT">C4D SHOW</h1>

  	<text-and-pic>
		<div slot="H3Title">根据国外的大神的学习资料制作而成 - 多边形山。</div>
		<p slot="txt1">建模是我一直很感兴趣的事物，当成本在你手中完成时，那种成就感真是很满足。3D是门高深的技术，需要不断的磨练，后期目标是独立完成一部3D短片。</p>
		<p slot="txt2">通过建模，独立渲染得到单个图片文件，然后使用JS配合css的transform-style: preserve-3d 完成视差效果，制作完成后感觉还过得去。</p>
		<p slot="txt3"></p>
	</text-and-pic>

</div>
</template>

<script>
import TextAndPic from './TextAndPic.vue';
export default {
  	name:'boxtwo',
  	components:{TextAndPic},
  	data () {
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>
@import './src/style/scss/BoxTwo.scss';

</style>