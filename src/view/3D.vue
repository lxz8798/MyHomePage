<template>
	<div id="ThreeDComp">
		<header-nav></header-nav>
		<div class="ThreeDCompBox">
			<box-two>
				
			</box-two>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import BoxTwo from '../components/BoxTwo.vue';

export default {
	components:{HeaderNav,MyFooter,BoxTwo},
	data () {
		return {

		}
	}
}
</script>

<style lang="scss">
@import '../style/base/Base.scss';
div.ThreeDCompBox {
	width:$WBox;
	height:$HBox;
}
</style>

