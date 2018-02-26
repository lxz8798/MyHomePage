<template>
	<div id="apologizeBox">
		<bread-crumb>
			<template scoped="props">
				<span slot="Bread_2">Links</span>
			</template>
		</bread-crumb>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
import ContentComp from '../components/ContentComp.vue';
export default {
	components:{HeaderNav,MyFooter,ContentComp,BreadCrumb,ContentComp},
	name:'Links',
	data () {
		return {
			msg:'This is Links!!!!!'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Apologize.scss';
</style>