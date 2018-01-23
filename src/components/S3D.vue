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
  			{name:'img1',img:'http://f.hiphotos.baidu.com/image/h%3D300/sign=4a0a3dd10155b31983f9847573ab8286/503d269759ee3d6db032f61b48166d224e4ade6e.jpg'},
  			{name:'img2',img:'http://d.hiphotos.baidu.com/image/h%3D300/sign=9af99ce45efbb2fb2b2b5e127f4b2043/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg'},
  			{name:'img3',img:'http://h.hiphotos.baidu.com/image/h%3D300/sign=836eeeae16950a7b6a3548c43ad0625c/c8ea15ce36d3d5397966ba5b3187e950342ab0cb.jpg'},
  			{name:'img4',img:'http://e.hiphotos.baidu.com/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg'},
  			{name:'img5',img:'http://b.hiphotos.baidu.com/image/h%3D300/sign=0e422b4e90504fc2bd5fb605d5dce7f0/c8177f3e6709c93d51a3a9b1943df8dcd1005426.jpg'},
  			{name:'img6',img:'http://g.hiphotos.baidu.com/image/h%3D300/sign=7e63024326f5e0fef1188f016c6134e5/d788d43f8794a4c2f362ea7105f41bd5ad6e3922.jpg'},
  			{name:'img7',img:'http://d.hiphotos.baidu.com/image/h%3D300/sign=edca6824a2773912db268361c8188675/9922720e0cf3d7ca600211eff91fbe096a63a9b6.jpg'},
  			{name:'img8',img:'http://f.hiphotos.baidu.com/image/h%3D300/sign=4a0a3dd10155b31983f9847573ab8286/503d269759ee3d6db032f61b48166d224e4ade6e.jpg'},
  			{name:'img9',img:'http://g.hiphotos.baidu.com/image/h%3D300/sign=bc01b87caf0f4bfb93d09854334e788f/10dfa9ec8a1363275cd315d09a8fa0ec08fac713.jpg'},
  			{name:'img10',img:'http://f.hiphotos.baidu.com/image/h%3D300/sign=4a0a3dd10155b31983f9847573ab8286/503d269759ee3d6db032f61b48166d224e4ade6e.jpg'}
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
@import './src/style/scss/BoxTwo.scss';
</style>