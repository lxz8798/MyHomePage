<template>
	<div id="Anima3DComp">
		<header-nav></header-nav>
		<div class="Anima3DCompBox">
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
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
@import '../style/base/Base.scss';
div.Anima3DCompBox {
	width:$WBox;
	height:$HBox;
}
</style>

