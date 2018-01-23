<template>
	<div id="ContentComp">

		<div class="ContentInfo" v-for="item in ContentUl">
			<slot name="ContentH1"><h1>暂时没有h1内容</h1></slot>
			<slot name="ContentH2"><h2>暂时没有h2内容</h2></slot>
			<slot name="ContentH3"><h3 class="ContentH3">暂时没有信息内容</h3></slot>
			<!-- <slot name="ContentH3"><p>暂时没有信息内容</p></slot> -->

			<span v-for="sub in item.info">
				<slot name="infoI"><p>{{sub.infoI}}</p></slot>
				
				<strong class="mail-icon">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'InfoII"><p>{{sub.infoII}}</p></slot>
				</strong>

				<slot name="infoIII"><p>{{sub.infoIII}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoIV"><p>{{sub.infoIV}}</p></slot>
				</strong>

				<slot name="infoV"><p>{{sub.infoV}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoVI"><p>{{sub.infoVI}}</p></slot>
				</strong>

				<slot name="infoVII"><p>{{sub.infoVII}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoVIII"><p>{{sub.infoVIII}}</p></slot>
				</strong>

				<slot name="infoIX"><p>{{sub.infoIX}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoX"><p>{{sub.infoX}}</p></slot>
				</strong>

				<slot name="infoXI"><p>{{sub.infoXI}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoXII"><p>{{sub.infoXII}}</p></slot>
				</strong>

				<slot name="infoXIII"><p>{{sub.infoXIII}}</p></slot>
				
				<strong class="mail-icon" v-if="sub.infoFlag">
					<slot name="TitleIcon"><i class="iconfont" slot="TitleIcon">&#xe67b;</i></slot>
					<slot name="'infoXIV"><p>{{sub.infoXIV}}</p></slot>
				</strong>
			</span>

		</div>
	</div>
</template>

<script>
export default {
	props: ['ContentUl'],
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
div#ContentComp {
	width:$WBox - $CompBoxSpace;
	display:flex;
	flex-direction:column;
	div.ContentInfo {
		display:inline-flex;
		flex-direction:column;
		h1,h2,h3,h4,p,strong {
			line-height: 1.5vh;
		}
		h1{
			font-size:1.8em;
		}
		h2 {
			font-size:1.6em;
		}
		h3 {
			font-size: 1.3em;
			line-height: 5vh;
			font-weight: normal;
		}
		p {
			font-size: 1.2em;
			line-height: 2em;
		}
		strong {
			width:$WBox - $CompBoxSpace - 1vw;
			font-size: 1em;
			font-weight: normal;
			display:inline-flex;
			justify-content:flex-start;
			align-items:center;
			height:4vh;
			background:hsla(0,0,0,.05);
			padding-left: 5px;
			i.iconfont {
				font-size: 18px;
				padding-right:0.3vw;
			}
		}
		.ContentInfoV {
			display:inline-flex;
			// flex-direction:row;
		}
		
	}
	
}
</style>

