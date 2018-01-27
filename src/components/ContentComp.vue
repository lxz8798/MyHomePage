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
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
@font-face {
  font-family: 'iconfont';  /* project id 547110 */
  src: url('//at.alicdn.com/t/font_547110_8gkwum8kder8uxr.eot');
  src: url('//at.alicdn.com/t/font_547110_8gkwum8kder8uxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_547110_8gkwum8kder8uxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_547110_8gkwum8kder8uxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_547110_8gkwum8kder8uxr.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:12px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
ul.LnfoList,p.LnfoListP {
	padding:0;
	margin:0;
	width:$WBox - $CompBoxSpace;
	height:auto;
	list-style-type:none;
	display:inline-flex;
	flex-direction:column;
	
	
	li {
		width:$WBox - $CompBoxSpace;
		height:5vh;
		line-height: 5vh;
		margin-bottom:1px;
		background:hsla(0,0,0,.05);
		i {
			width:2.5vw;
			height:5vh;
			font-size: 1em;
			font-style: normal;
			text-align: right;
			padding-right:0.5vw;
			display:inline-block;
			background:hsla(0,0,0,.2);
		}
	}
	li.bgNone {
		background:none;
	}
}
div.infoBox {
	h1{
		font-size:1.8em;
	}
	h2 {
		font-size:1.6em;
	}
	h3 {
		font-size: 1.4em;
		line-height: 4vh;
		font-weight: normal;
	}
	p {
		font-size: 1.2em;
		line-height: 2vh;
	}		
	}
div#ContentComp {
	width:$WBox - $CompBoxSpace;
	display:flex;
	flex-direction:column;
}
</style>

