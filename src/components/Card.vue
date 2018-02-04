<template>
	<el-card class="box-card">
	  <div slot="header" class="clearfix">
	    <span>卡片名称</span>
	    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
	  </div>
	  <div v-for="o in 4" :key="o" class="text item">
	    {{'列表内容 ' + o }}
	  </div>
	</el-card>
</template>

<script>
import http from '../api/httpAxios.js';

export default{
	data(){
		return {
			msg:'This is Axios API test!',
			axiosData:[],
		}
	},
	mounted() {

		http(this.apiSetting.axiosData)
	    .then(res =>{
	        console.log(res.data);
	        // console.log(this.apiSetting.axiosData);
	        this.axiosData = res.data;
	        console.log(this.axiosData);
	        // this.$store.commit("loadProject", res.data.data);
	    },
	    error =>{
	        console.log(error);
	    })
    },
	mounted(){
		// this.$axios.get('/api/axios')
	 //    .then(function (res) {
	 //    	console.log(res);
	 //    	console.log(res.data);
	 //    })
	 //    .catch(function (err) {
	 //      console.log(err);
	 //    });
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';	
</style>