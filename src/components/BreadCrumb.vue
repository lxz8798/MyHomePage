<template>
<div id="BreadCrumb">
	<el-breadcrumb separator-class="el-icon-arrow-right">
	  <el-breadcrumb-item :to="{ path: '/' }"><slot name="Bread_1">首页</slot></el-breadcrumb-item>
	  <el-breadcrumb-item><slot name="Bread_2">找不到页面</slot></el-breadcrumb-item>
	</el-breadcrumb>
</div>
</template>

<script>
export default {
	// props:['Bread'],
	data () {
		return {

		}
	}
}
</script>

<style>

</style>