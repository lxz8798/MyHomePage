<template>
<div id="MyFooter">
	<div class="FooterContent">
		<ul class="TS">
			<li><h3>TECHNOLOGY STACK</h3></li>
			<li v-for="item in ts">{{item.text}}</li>
		</ul>
		<ul>
			<li><h3>TEMPLATE</h3></li>
			<li v-for="item in temp">{{item.text}}</li>
		</ul>
		<ul>
			<li><h3>LEARNING SITE</h3></li>
			<li v-for="item in ls">{{item.text}}</li>
		</ul>
		<ul>
			<li><h3>Code Tool</h3></li>
			<li v-for="item in ct">{{item.text}}</li>
		</ul>
		<ul>
			<li><h3>About me</h3></li>
			<li>
				<p>我于06年毕业进入社会，第一份工作是上海的计算机技术维护，工作了2年左右，发现成长空间非常的小，自我反省后一个偶然的机会接触到了网站设计行业，由朋友领进门慢慢的成长至之，从一开始只会简单的做图到现在能独立完成一个中小型网站。</p>
				<p>我的自学能力非常强，大多数技术都自主学习得来，所以我比起动嘴皮子，更善于手底下的功夫。</p>
				<p>这个主页是为了展现我的能力而特别制作的，采用flex布局，使用的是Vue+NodeJS+JS+WebPack全家桶等等，耗时大概1个半月，目的是展示，所以功能并不是很多，但也包含了大部份实际工作中需要用到的技术，javascript、vuex、vue-router，axios等等。</p>
				<p>我对未来的发展有明确的定位，创业失败后大概20年内不会有类似的想法了，一心专把技术研究吃透，未来能独立完成大型功能型网站，一部或多部3D短片，一些自我满足的手绘插画是我未来的发展方向。</p>
				<p>&copy 2017-2018 lazy-studio.com</p>
			</li>
			<li class="iconBox iconfont">
				
				<svg class="qq-icon" aria-hidden="true">
				  	<use xlink:href="#icon-qq1-copy"></use>
				</svg>
				<svg class="wx-icon">
					<use xlink:href="#icon-weixin-copy"></use>
				</svg>
				<svg class="mail-icon">
					<use xlink:href="#icon-qunfengyouxiang"></use>
				</svg>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	data () {
		return {
			ts:[
				{text:'PS-WebDesign'},
				{text:'AE-MGAnimation'},
				{text:'C4d-3DModel'},
				{text:'HTML5/CSS3/SCSS'},
				{text:'SVG/Illustrator'},
				{text:'Vue'},
				{text:'NodeJS'},
				{text:'JavaScript'},
				{text:'KOA2'},
				{text:'Webpack'}
			],
			temp:[
				{text:'Practice-one'},
				{text:'Practice-two'},
				{text:'sister-link'},
				{text:'wife-link'}
			],
			ls:[
				{text:'dribbble.com'},
				{text:'artstation.com'},
				{text:'wix.com'}
			],
			ct:[
				{text:'github.com'},
				{text:'codepen.io'},
				{text:'iconfont.cn'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/MyFooter.scss';

</style>