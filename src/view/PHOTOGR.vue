<template>
	<div id="PhotoComp">
		<header-nav></header-nav>
		<div class="PhotoCompBox">
			<div class="Bread">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/' }"><slot name="Bread_1">首页</slot></el-breadcrumb-item>
				  <el-breadcrumb-item><slot name="Bread_2">NodeJS</slot></el-breadcrumb-item>
				</el-breadcrumb>
			</div>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
			</div>

			<div class="NodeJSTag">
				<el-tag v-for="item in Tag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>
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
			Tag:[
				{
					type:'success',
					tag:'Photo'
				},
				{
					type:'info',
					tag:'照片集'
				},
				{
					type:'warning',
					tag:'PS'
				},
				{
					type:'',
					tag:'PS后期'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
$NodeJSPage:3;
div#PhotoComp {
	width:$WBox;
	height:$HBox * $NodeJSPage;
	min-height:$HBox;
	@include FC(flex,column,center,center)
	div.PhotoCompBox {
		width:$WBox - $CompBoxSpace;
		height:$HBox * $NodeJSPage;
		padding-top:$BoxPT;
		display:inline-flex;
		flex-direction:column;
		flex:1;
		div.Bread,div.AuthorInfo {
			width:$WBox;
			height:5vh;
			line-height: 5vh;

		}
		div.Bread {
			
			
		}
		div.AuthorInfo {
			i {
				padding-right:5px;
			}
		}
		div.NodeJSTag {
			width:$WBox;
			height:10vh;
			display:inline-flex;
			align-items:center;
			span {
				margin-right:1vw;
			}
		}
	}
}
</style>

