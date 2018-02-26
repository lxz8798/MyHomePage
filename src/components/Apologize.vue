<template>
<div id="apologizeBox">
  	<img :src="img" />
  	<h1 class="BigT">很抱歉，页面正在制作中。。</h1>
</div>
</template>

<script>
export default {
  	name:'apologize',
  	data () {
		return {
			img:require('./../assets/logo/logo-cg.png')
		}
	}
}
</script>

<style lang="scss" scoped>
@import './src/style/scss/Apologize.scss';
</style>