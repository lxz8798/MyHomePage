<template>
	<div id="CGComp">
		<header-nav></header-nav>
		<div class="CGCompBox">
			
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import http from '../api/httpAxios.js';
export default {
	components:{HeaderNav,MyFooter},
	data () {
		return {

		}
	},
	mounted () {
		// http(this.apiSetting.getProgress)
		http(this.apiSetting.axiosData)
        .then(res =>{
            console.log(res);
            // this.$store.commit("loadProject", res.data.data);
        },
        error =>{
            console.log(error);
        })
		// this.$axios.post('/api/cg')
		// .then((res) => {
		// 	console.log(res);
		// })
		// .catch((error)=>{
		// 	console.log(error);
		// })
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
div#CGComp {
	$BoxBG:#c0c0c0;

	width:$WBox;

	background-color:$BoxBG;
	div.CGCompBox {
		width:$WBox;
		height:$HBox;
		background:url(../assets/img/qs.jpg) no-repeat;
	}
	
}
</style>

