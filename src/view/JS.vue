<template>
	<div id="JsComp">
		<header-nav></header-nav>

		<div class="JsCompBox">
			<bread-crumb>
				<template scoped="props">
					<span slot="Bread_2">Js</span>
				</template>
			</bread-crumb>

			<div class="AuthorInfo">
				<span><i class="el-icon-edit"></i>作者：站长</span>
				<span><i class="el-icon-time"></i>发表时间:2018/1/23</span>
			</div>

			<div class="JsTag">
				<el-tag v-for="item in JsTag" :type="item.type" size="medium">{{item.tag}}</el-tag>
			</div>

			<content-comp 
				scoped="props" 
				:content-ul="contentUl" 
				id="1">
			</content-comp>

			<codemirror v-model="code" :options="cmOptions" :value="code" ></codemirror>

		</div>
		
		<my-footer></my-footer>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import ContentComp from '../components/ContentComp.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
import http from '../api/httpAxios.js';
export default {
		components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
		data () {
		return {
			name:'Js',
			code:`Js学习的地方有很多，如codepen，runjs，以下是我参照国外大神的代码写的一个视差，已经用在这个站点里了。

myParallax: function (obj) {
	let vm = this;
	vm.s3ddom = $('#ViewF');
	$(vm.s3ddom).mousemove(function (event) {
		vm.cx = Math.ceil(vm.s3ddom.width() / 2);
		vm.cy = Math.ceil(vm.s3ddom.height() / 2);
		vm.dx = event.pageX - vm.cx;
		vm.dy = event.pageY - vm.cy;
		vm.tx = -(vm.dy / vm.cy);
		vm.ty = -(vm.dx / vm.cx);
		vm.radius = Math.sqrt(Math.pow(vm.tx,2) + Math.pow(vm.ty,2));
		vm.degree = (vm.radius * 2);

		TweenLite.to(vm.s3ddom,1,{transform:'rotate3d('+vm.tx+','+vm.ty+',0,'+vm.degree+'deg)',ease:Power4.easeOut});
		return
	});
}
			`,
			cmOptions:{
	      		tabSize: 4,
		        styleActiveLine: true,
		        lineNumbers: true,
		        line: true,
		        mode: 'text/javascript',
		        lineWrapping: true,
		        readOnly:'nocursor',
		        theme:'Monokai'
	      	},
			contentUl:[
				{	
					h1:'Js已经成了一个全方位的语言了，不管前端还是后台的NodeJS，学会JS就可以独立完成一个站点',
					h2:'但是Js想要学好，学精，得长时间不断的练习，学习大神的们的逻辑思维，这是个长期且艰苦的过程。',
					flag:true
				}
			],

			JsTag:[
				{
					type:'success',
					tag:'Js'
				},
				{
					type:'info',
					tag:'get'
				},
				{
					type:'warning',
					tag:'post'
				},
				{
					type:'danger',
					tag:'response'
				},
				{
					type:'info',
					tag:'request'
				}
			]

		}
	},
	mounted(){
		http(this.apiSetting.axiosData)
	    .then(res =>{
	        // console.log(res.data);
	        // console.log(this.apiSetting.axiosData);
	        this.axiosData = res.data;
	        console.log(this.axiosData);
	        // this.$store.commit("loadProject", res.data.data);
	    },
	    error =>{
	        console.log(error);
	    })
	}
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Js.scss';
</style>

