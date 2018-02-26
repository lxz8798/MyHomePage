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

					<el-form-item label="CONFIRM" prop="checkPass">
						<span class="FormIco"><i class="iconfont icon-dunpaisuo"></i></span>
					    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
					</el-form-item>

					<el-form-item label="E-MAIL" prop="email">
				  		<span class="FormIco"><i class="iconfont icon-youxiang"></i></span>
				   		<el-input v-model="ruleForm.email"></el-input>
				  	</el-form-item>

				  	<el-form-item class="FormBut">
					    <el-button type="primary" @click="regsition">注册+</el-button>
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
export default {
	components:{HeaderNav,MyFooter,ContentComp,BreadCrumb},
		data () {
		var checkUser = (rule, value,callback) => {
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
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
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
			ruleForm: {
				username:'',
	            pass: '',
	            checkPass: '',
	            email:''
	        },
	        rules: {
        	 	username: [
		            { validator:checkUser, trigger: 'blur' },
		            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          	],
	            pass: [
	                { validator: validatePass, trigger: 'blur' }
	            ],
	            checkPass: [
	                { validator: validatePass2, trigger: 'blur' }
	            ],
	            email: [
	                // { rmessage: '请输入邮箱地址.', trigger: 'blur' },
	                { validator: checkEmail, trigger:'blur' },
			      	{ type: 'email', message: '请输入正确的邮箱地址!', trigger: 'blur,change' }
	            ]
	        }
		}
	},
 	methods: {
      regsition(ruleForm) {
      	this.$axios.post('/register',{
      		username:this.username,
      		password:this.pass
      	}).then((response)=>{
      		let res = response.data;
      		if(res.status == "0") {
      			console.log('success');
      		} else {
      			console.log('error');
      		}
      	})
        // this.$refs[ruleForm].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
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

