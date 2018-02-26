<template>
	<div slot="S3DModule" id="S3DModule" @mouseenter="show = !show">
	  <ul id="ViewF">
	  	<li v-for="(item,index) in items" class="list">
	  		<slot :name="item.name"><img :src="item.img" :alt="item.name"/></slot>
	  	</li>
    </ul>
	</div>
</template>

<script>
import $ from 'jquery';
export default { 
	data () {
  	return {
  		show:true,
  		S3DData:[
  			{
  				s3ddom:'',
  				request:null,
  				radius:'0',
  				degree:'0',
	  			cx:'0',
	  			cy:'0',
	  			dx:'0',
	  			mx:'0',
	  			my:'0',
	  			tx:'0',
	  			ty:'0',
	  			dy:'0',
		  		pre:'0'
	  		}
  		],
  		items:[
  			{
  				name:'img1',
  				img:require('./../assets/shan/8.png')
  			},
  			{
  				name:'img2',
  				img:require('./../assets/shan/1.png')
  			},
  			{
  				name:'img3',
  				img:require('./../assets/shan/6.png')
  			},
  			{	
  				name:'img4',
  				img:require('./../assets/shan/9.png')
  			},
  			{
  				name:'img5',
  				img:require('./../assets/shan/5.png')
  			},
  			{
  				name:'img6',
  				img:require('./../assets/shan/9.png')
  			},
  			{
  				name:'img7',
  				img:require('./../assets/shan/3.png')
  			},
  			{
  				name:'img8',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img9',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img10',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img11',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img12',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img13',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img14',
  				img:require('./../assets/shan/7.png')
  			},
  			{
  				name:'img15',
  				img:require('./../assets/shan/7.png')
  			}
  		]
  		
		}
		
	},
	mounted () {
		this.myParallax(this.S3DData);
	},
	watch:{

	},
	computed: {

	},
	methods:{
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
	}
}
</script>

<style lang="scss" scoped>
@import './src/style/scss/S3D.scss';
</style>