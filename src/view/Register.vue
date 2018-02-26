<template>
	<div id="LoginComp">
			<div class="LoginCompBox">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" :label-position="labelPosition" size="small">
					
					<div class="LoginIco">
						<span><i class="iconfont icon-hipster"></i></span>
					</div>

					<!-- <el-form-item label="USERNAME" prop="username">
						<span class="FormIco"><i class="iconfont icon-zhuce1"></i></span>
				    	<el-input v-model="ruleForm.username"></el-input>
				    </el-form-item> -->
					
					<el-form-item label="USERNAME" prop="username">
						<span class="FormIco"><i class="iconfont icon-zhuce1"></i></span>
					    <el-input v-model="ruleForm.username"></el-input>
				  	</el-form-item>

					<el-form-item label="PASSWORD" prop="pass">
						<span class="FormIco"><i class="iconfont icon-zhucedenglumima1"></i></span>
				    	<el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
				    </el-form-item>

					<el-form-item label="CONFIRM" prop="checkpass">
						<span class="FormIco"><i class="iconfont icon-dunpaisuo"></i></span>
					    <el-input type="password" v-model="ruleForm.checkpass" auto-complete="off"></el-input>
					</el-form-item>

					<el-form-item label="E-MAIL" prop="email">
				  		<span class="FormIco"><i class="iconfont icon-youxiang"></i></span>
				   		<el-input v-model="ruleForm.email"></el-input>
				  	</el-form-item>

				  	<el-form-item class="FormBut">
					    <el-button type="primary" @click="regsition('ruleForm')">注册+</el-button>
				  	</el-form-item>
				</el-form>
			</div>
	</div>
</template>

<script>
import HeaderNav from '../components/MyHeaderNav.vue';
import MyFooter from '../components/MyFooter.vue';
import ContentComp from '../components/ContentComp.vue';
import BreadCrumb from '../components/BreadCrumb.vue';
import Router from 'vue-router';
export default {
	components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
		data () {
		var checkUser = (rule, value,callback) => {
      		let that = this;
      		if(value === '') {
      			callback(new Error('请输入用户名!'))
      		} else {
      			callback();
      		}
      	}
      	var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm.checkpass !== '') {
	            this.$refs.ruleForm.validateField('checkpass');
	          }
	          callback();
	        }
      	};
      	var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
      	};
      	var checkEmail = (rule, value,callback) => {
      		if(value === '') {
      			callback(new Error('请输入电子邮箱，如emial@qq.com!'))
      		} else {
      			callback();
      		}
      	}
		return {
			labelPosition:'top',
			userResData:'',
			ruleForm: {
				username:'',
	            pass: '',
	            checkpass: '',
	            email:''
	        },
	        rules: {
        	 	username: [
		            {validator:checkUser, trigger: 'blur' },
		            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          	],
	            pass: [
	                {validator: validatePass, trigger: 'blur' }
	            ],
	            checkpass: [
	                {validator: validatePass2, trigger: 'blur' }
	            ],
	            email: [
	                // { rmessage: '请输入邮箱地址.', trigger: 'blur' },
	                {validator: checkEmail, trigger:'blur' },
			      	{ type: 'email', message: '请输入正确的邮箱地址!', trigger: 'blur,change' }
	            ]
	        }
		}
	},
	mounted(){
		
	},
 	methods: {
      	regsition(ruleForm) {
      		this.$refs.ruleForm.validate(valid => {
		          if (valid) {
		          	let that = this;
		          	let params = {
		          		username:this.ruleForm.username,
		          		password:this.ruleForm.pass,
		          		checkpass:this.ruleForm.checkpass,
		          		email:this.ruleForm.email
		          	}
		          	this.postRequest('/signup',params,(response, next) => {
		          		// console.log(response)
		          	})
		          	.then(response => {
		          		console.log(response)
		          		that.userResData = response.data;
		          		if (that.userResData.status == 1) {
	        				this.$message.success(that.userResData.message);
	        				that.ruleForm.username = "";
	        				that.ruleForm.pass = "";
	        				that.ruleForm.checkpass = "";
	        				that.ruleForm.email = "";
	        				next()
		          		}
		          		if (that.userResData.status == 2) {
	        				this.$message.error(that.userResData.message);
	        				this.Router.push({path:'/login'});
		          		}
		          	})
		          	.catch(error => {
		          		this.$message.error(that.userResData.message)
		          	})
		          } else {
		            	this.$message.error('表单值不能为空');
		            	next()
		          }
        	});
      		
      	}
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
// $LoginPage:3;
div#LoginComp {
	width:$WBox;
	height:$HBox;
	min-height:$HBox;
	background: #202020;
	@include FC(flex,column,center,center)
	div.LoginCompBox {
		width:26vw;
		height:84vh;
		display:inline-flex;
		flex-direction:column;
		align-items:center;
		background:#fff;
		border-radius:8px;
		span.FormIco {
			position: absolute;
			top:2px;
			left:0;
			width:22px;
			padding-left:8px;
			z-index:1;
			background: hsla(0,0,0,.05)
		}
		.el-form {
			width:18vw;
		}
	}
	div.LoginIco {
		padding-top: 3vh;
		padding-bottom: 3vh;
		@include FC(flex,column,center,center);
		.iconfont {
			font-size: 9em;
			color:#202020;
			position: relative;
			top:0;
			left:0;
		}
	}
	div.FormBut {
		margin-top: 3em;
	}
}

</style>

