<template>
	<div id="MGComp">
		<header-nav></header-nav>
		<div class="MGCompBox">
			
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
		return {

		}
	}
}
</script>

<style lang="scss">
@import '../style/base/Base.scss';
div.MGCompBox {
	width:$WBox;
	height:$HBox;
}
</style>

