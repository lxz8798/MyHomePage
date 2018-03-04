<template>
	<div id="SingInComp">
		<div class="SingInCompBox">
			<el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" class="demo-ruleForm" :label-position="labelPosition" size="small">

				<div class="SingInIco">
					<span><i class="iconfont icon-hipster"></i></span>
				</div>

				<el-form-item label="USERNAME" prop="username">
					<span class="FormIco"><i class="iconfont icon-zhuce1"></i></span>
				    <el-input v-model="ruleForm2.username"></el-input>
			  	</el-form-item>

				<el-form-item label="PASSWORD" prop="password">
					<span class="FormIco"><i class="iconfont icon-zhucedenglumima1"></i></span>
			    	<el-input type="password" v-model="ruleForm2.password"></el-input>
			    </el-form-item>

			    <el-form-item class="FormBut">
					    <el-button type="primary" @click="SingIn('ruleForm2')">登 录</el-button>
				  	</el-form-item>

			</el-form>
		</div>
	</div>
</template>

<script>
import http from '../api/httpAxios.js';
export default {
	components:{},
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
          
          callback();
        }
      };
		return {
			labelPosition: 'top',
	        ruleForm2: {
				username:'',
	            password: ''
	        },
	         rules: {
        	 	username: [
		            {validator:checkUser, trigger: 'blur' },
		            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          	],
	            password: [
	                {validator: validatePass, trigger: 'blur' }
	            ],
	        }
		}
	},
	methods: {
      	async SingIn(ruleForm2) {
      		await this.$refs.ruleForm2.validate(valid => {
		          if (valid) {
		          	let that = this;
		          	let params = {
		          		username:this.ruleForm2.username,
		          		password:this.ruleForm2.password
		          	}
		          	this.getRequest('/signin',params,res=>{
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
		          			that.$router.push('/');
		          		}
		          		if (userResData.status == 1) {
		          			this.$message.error(userResData.message);
		          		}
		          		if (userResData.status == 2) {
		          			this.$message.error(userResData.message);
		          		}
		          	})
		          	// 
		          	// 
		          	// this.$axios.get('/signin',{params:params}).then(data => {
		          	// 	console.log(data);
		          	// })
		          	
		          } else {
		            	this.$message.error('表单值不能为空');
		          }
        	});
      	}
    }
}
</script>

<style lang="scss" scoped>
@import '../style/scss/SingIn.scss';
</style>

