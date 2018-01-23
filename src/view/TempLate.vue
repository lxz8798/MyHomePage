<template>
	<div id="TempLateComp">
		<header-nav></header-nav>
		<div class="TempLateCompBox">
			
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
div.TempLateCompBox {
	width:$WBox;
	height:$HBox;
}
</style>

