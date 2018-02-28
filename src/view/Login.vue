<template>
	<div id="RegComp">
			<div class="RegCompBox">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" :label-position="labelPosition" size="small">
					
					<div class="RegIco">
						<span><i class="iconfont icon-hipster"></i></span>
					</div>

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

					<el-form-item
					    prop="email"
					    label="E-MAIL"
					  >
				  		<span class="FormIco"><i class="iconfont icon-youxiang"></i></span>
				   		<el-input v-model="ruleForm.email"></el-input>
				  	</el-form-item>

				  	<el-form-item class="FormBut">
					    <el-button type="primary" @click="submitForm('rules')">注册</el-button>
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
		var checkUser = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('用户名不能为空'));
	        }
	        setTimeout(() => {
	          if (!Number.isInteger(value)) {
	            callback(new Error('请输入用户名'));
	          } else {
	            callback();
	          }
	        }, 1000);
	      };
		var checkAge = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('邮箱不能为空'));
	        }
	        setTimeout(() => {
	          if (!Number.isInteger(value)) {
	            callback(new Error('请输入邮箱，如:username@mail.com'));
	          } else {
	          }
	        }, 1000);
	      };
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
		return {
			labelPosition:'top',
			ruleForm: {
				username:'',
	            pass: '',
	            checkPass: '',
	            age: '',
	            email:''
	        },
	        rules: {
	        	username: [
	                { validator: checkUser, trigger: 'blur' }
	            ],
	            pass: [
	                { validator: validatePass, trigger: 'blur' }
	            ],
	            checkPass: [
	                { validator: validatePass2, trigger: 'blur' }
	            ],
	            email: [
	                // { validator: checkAge, trigger: 'blur' }
	                { required: true, message: '请输入邮箱地址.', trigger: 'blur' },
			      	{ type: 'email', message: '请输入正确的邮箱地址!', trigger: 'blur,change' }
	            ]
	        }
		}
	},
 	methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/base/Base.scss';
@import '../style/mixin/mixin.scss';
// @import '../style/scss/Regsiter.scss';


</style>

