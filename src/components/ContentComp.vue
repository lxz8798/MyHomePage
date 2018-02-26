<template>
	<div id="ContentComp" class="infoBox">
		
		<div v-for="title in contentUl" :key="title.id">
			<h1><slot name="infoH1">{{title.h1}}</slot></h1>
			<h2><slot name="infoH2">{{title.h2}}</slot></h2>
			<h3><slot name="infoH3">{{title.h3}}</slot></h3>
		</div>
		
		<ul class="LnfoList" v-for="item in infoBox" :key="item.id">
			<li v-for="sub in item.data" :key="sub.id">
				<i><slot :name="sub.num">{{sub.id+'.'}}</slot></i>
				<span><slot :name="sub.name">{{sub.txt}}</slot></span>
			</li>
			
		</ul>

		<p v-for="item in pBox" :key="item.id">
			<span v-for="sub in item.data" :key="sub.id">
				<slot :name="sub.pname">{{sub.ptxt}}</slot>
			</span>
		</p>
		
	</div>
</template>

<script>
export default {
	props: ['infoBox','pBox','infoBox_1','pBox_1','infoBox_2','pBox_2','infoBox_3','pBox_3','infoBox_4','pBox_4','infoBox_5','pBox_5','infoBox_6','pBox_6','contentUl'],

	data () {
		return {

		}
	},

}
</script>

<style lang="scss" scoped>
@import '../style/scss/ContentComp.scss';
</style>

