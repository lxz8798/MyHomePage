<template>
	<div id="LinksComp">
		<header-nav></header-nav>
		<div class="LinksCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">Links</span>
				</template>
			</bread-crumb>

			<div class="card">
				<ul>
					<li>
						<div class="img"><a href="../site/old/"><img src="../assets/site/old.png" height="699" width="1347" /></a></div>
						<div class="info">
							<h4>很早以前的旧版本主页</h4>
							<p>完成时间:2013-7-13</p>
						</div>
					</li>
					<li>
						<div class="img"><i class="iconfont icon-tupian"></i></div>
						<div class="info">
							<h4>添加更多项目中..</h4>
							<p>完成时间:20xx-x-xx</p>
						</div>
					</li>
					<li>
						<div class="img"><i class="iconfont icon-tupian"></i></div>
						<div class="info">
							<h4>添加更多项目中..</h4>
							<p>完成时间:20xx-x-xx</p>
						</div>
					</li>
					<li>
						<div class="img"><i class="iconfont icon-tupian"></i></div>
						<div class="info">
							<h4>添加更多项目中..</h4>
							<p>完成时间:20xx-x-xx</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
export default {
	components:{HeaderNav,MyFooter,BreadCrumb},
	name:'Links',
	data () {
		return {}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Links.scss';
</style>