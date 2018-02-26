<template>
	<div id="ITTComp">
		<h1 class="BigT"><slot name="bigt">C4D SHOW</slot></h1>

		<div class="ITTCompBox">

			<div class="l">
				<p class="t1"><slot name="ITT_t1">大标题</slot></p>
				<p class="t2"><slot name="ITT_t2">描述标题</slot></p>
				<p class="t3"><slot name="ITT_t3">小标题</slot></p>
				<p class="t4"><slot name="ITT_t4">小标题</slot></p>
			</div>
			
			
			<div class="r">
				<span class="ITTr"><slot name="ITTr"></slot></span>
			</div>
			
		</div>
	</div>
</template>

<script>


export default {
	data () {
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/ImgTxtTemp.scss';
</style>

