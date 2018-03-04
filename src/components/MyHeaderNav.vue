<template>
	<div id="MyHeaderNav" :class="{'NavHidden':HiddenTop}" @click="HiddenTop = !HiddenTop">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="router">
				<el-menu-item index="/">LAZY-STUDIO.COM</el-menu-item>
				<el-submenu v-for="item in navMenu" :index="item.id" :key="item.id">
					<template slot="title"><span v-text="item.name"></span></template>
					<el-menu-item :index="sub.componentName" v-for="sub in item.sub" :key="sub.id" v-text="sub.name"></el-menu-item>
				</el-submenu>
			  <el-menu-item index="nodejs">NODEJS</el-menu-item>
        <el-menu-item index="mongodb">MONGODB</el-menu-item>
			  <!-- <el-menu-item index="template">TEMPLATE</el-menu-item> -->
			   <el-menu-item index="links">LINKS</el-menu-item>
			 <!-- <el-menu-item index="blog">BLOG</el-menu-item> -->
			  <el-menu-item index="update">UPDATE</el-menu-item>
        <el-menu-item index="signup">Sing Up</el-menu-item>
        <el-menu-item index="signin">Sing In</el-menu-item>
		  <router-view></router-view>
		</el-menu>
    <span class="ShowNav"><i class="el-icon-sort"></i></span>
	</div>
</template>

<script>
import navMenu from '../utils/menu.js';
export default {
  data() {
    return {
    	router:true,
    	navMenu,
    	scrollT:'',
    	scrollB:'',
    	scrollR:'',
    	HiddenTop:false,
    	NHidden:'NavHidden',
    	activeIndex: '1'
    }
  },
  mounted () {
  	window.addEventListener('scroll',this.ScrollHidden,true);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    ScrollHidden () {
    	let that = this;
    	that.scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    	that.scrollB = document.getElementById('app').scrollHeight;
    	that.scrollR = that.scrollB - that.scrollT;
    	if(that.scrollT >= 120){
    		this.HiddenTop = true;
    	} else {
    		this.HiddenTop = false;
    	}
    	if(that.scrollR <= 800){
    		this.HiddenTop = false;
    	} 		
    }
  }
}
</script>

<style lang="scss">
@import './src/style/scss/MyHeaderNav.scss';
</style>