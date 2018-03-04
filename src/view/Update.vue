<template>
	<div id="UpdateComp">
		<header-nav></header-nav>
		<div class="UpdateCompBox">
			<!-- <div class="logo">
				<img :src="logo" />
			</div> -->
			<p class="Blank"></p>

			<ul>
				<li class="t1">
					以高超的全栈技术为目标而努力的人
				</li>
				<li class="t2">
					Vue+Koa+NodeJS+Scss+JavsScript+Axios+WebPack
				</li>
				<li class="Blank"></li>
				<li class="t3">
					LAZY-STUDIO.COM
				</li>
				<li class="t4">
					v1.4.1
				</li>
			</ul>
		</div>
		<div class="bgT">
			起稿，设计思路，主要目的展示多方面展示个人能力
		</div>
		<div class="TempImg">
			<img :src="img" />
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
export default {
	components:{HeaderNav,MyFooter},
		data () {
		// name:'update',
		return {
			logo:require('./../assets/logo/logo-cg.png'),
			img:require('./../assets/update/updata-page-temp.jpg')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
@import '../style/scss/Update.scss'
</style>

