<template>
	<div id="RegisterComp">
			<div class="RegisterCompBox">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" :label-position="labelPosition" size="small">
					
					<div class="RegisterIco">
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

					<el-form-item label="PASSWORD" prop="password">
						<span class="FormIco"><i class="iconfont icon-zhucedenglumima1"></i></span>
				    	<el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
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
	        } else if (value !== this.ruleForm.password) {
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
	            password: '',
	            checkpass: '',
	            email:''
	        },
	        rules: {
        	 	username: [
		            {validator:checkUser, trigger: 'blur' },
		            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          	],
	            password: [
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
      	async regsition(ruleForm) {
      		
      		await this.$refs.ruleForm.validate(valid => {
		          if (valid) {
		          	let that = this;
		          	let params = {
		          		username:this.ruleForm.username,
		          		password:this.ruleForm.password,
		          		checkpass:this.ruleForm.checkpass,
		          		email:this.ruleForm.email
		          	}
		          	this.postRequest('/signup',params,res => {
		          		return new Promise((resolve,reject) => {
		          			if (res.status == 200) {
			          			resolve()
			          		} else {
			          			reject()
			          		}
		          		})
		          	})
		          	.then(data => {
		          		let userResData = data.data;
		          		let that = this;
		          		if (userResData.status == 0) {
		          			this.$message.success(userResData.message);
		          			that.$router.push('/signin');
		          		}
		          		if (userResData.status == 1) {
		          			this.$message.error(userResData.message);
		          		}
		          	})
		          } else {
		            	this.$message.error('表单值不能为空');
		          }
        	});
      		
      	}
    }
}
</script>

<style lang="scss" scoped>
@import '../style/scss/Register.scss';

</style>

