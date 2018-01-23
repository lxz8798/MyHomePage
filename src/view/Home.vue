<template>
	<div>
	<header-nav></header-nav>
	<box-one></box-one>
	<box-two></box-two>
	<box-three></box-three>
	<box-four></box-four>
	<my-footer></my-footer>
	<!-- <text-and-pic></text-and-pic> -->
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import BoxOne from '../components/BoxOne.vue';
import BoxTwo from '../components/BoxTwo.vue';
import BoxThree from '../components/BoxThree.vue';
import BoxFour from '../components/BoxFour.vue';
import MyFooter from '../components/MyFooter.vue';
// import TextAndPic from '../components/TextAndPic.vue';
export default {
	components:{HeaderNav,BoxOne,BoxTwo,BoxThree,BoxFour,MyFooter},
	data () {
		return {
			
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>