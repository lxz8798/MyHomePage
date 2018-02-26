<template>
	<div>
	<header-nav></header-nav>
	<box-one></box-one>
	<box-two></box-two>
	<atlas></atlas>
	<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import BoxOne from '../components/BoxOne.vue';
import BoxTwo from '../components/BoxTwo.vue';
import atlas from '../components/Atlas.vue';
import MyFooter from '../components/MyFooter.vue';
export default {
	components:{HeaderNav,BoxOne,BoxTwo,atlas,MyFooter},
	data () {
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>

</style>