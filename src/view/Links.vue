<template>
	<div id="LinksComp">
		<header-nav></header-nav>
		<div class="LinksCompBox">
			<!-- <bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">Links</span>
				</template>
			</bread-crumb> -->

			<apologize></apologize>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
import apologize from '../components/Apologize.vue';
export default {
	components:{HeaderNav,MyFooter,BreadCrumb,apologize},
	name:'Links',
	data () {
		return {
			msg:'This is Links!!!!!'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Links.scss';
</style>