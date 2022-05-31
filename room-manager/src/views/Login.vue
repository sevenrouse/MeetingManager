<template>
  <div id="Login">
	  <div id="top">
	  	  <el-radio-group v-model="labelPosition" size="small">
		  <el-button label="left"> 登录</el-button>
	      <el-button label="right" @click ="tiaozhuanRegister()" style="margin-left: 35px;">注册</el-button>
	  </el-radio-group>
	  </div>
	  <div id="content">
	  	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<!-- 	    <el-form-item label="用户名" prop="userName">
	      <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
	    </el-form-item> -->
	    <el-form-item label="手机号" prop="phone">
	      <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="密码" prop="password">
	      <el-input type="password" v-model="ruleForm.password"></el-input>
	    </el-form-item>
	    <div id="btnRegister">
	    	<el-form-item>
	    	  <el-button type="primary" style="width: 150px;" @click="submitForm('ruleForm')"  >登录</el-button>
	    	  <!-- <el-button style="margin-left: 50px;"  @click="resetForm('ruleForm')"  >重置</el-button> -->
	    	</el-form-item>
	    </div>
	  </el-form>
	  </div>
	  
  </div>
</template>

<script>
	
	export default{
		el: "Login",
		    data() {
				// var checkName = (rule, value, callback) => {
				// 	  if (value === '') {
				// 		callback(new Error('请输入用户名'));
				// 	  } else {
				// 		if (this.ruleForm.userName !== '') {
				// 		  this.$refs.ruleForm.validateField('userName');
				// 		}
				// 		callback();
				// 	  }
				// 	};
					var checkPhone = (rule, value, callback) => {
					  if (value === '') {
						callback(new Error('请输入手机号'));
					  } else {
						if (this.ruleForm.phone !== '') {
						  this.$refs.ruleForm.validateField('phone');
						}
						callback();
					  }
					};
					
					var checkPassword = (rule, value, callback) => {
					  if (value === '') {
						callback(new Error('请输入密码'));
					  } else {
						if (this.ruleForm.password !== '') {
						  this.$refs.ruleForm.validateField('password');
						}
						callback();
					  }
					};	

		      return {
		        labelPosition: 'left',
				 ruleForm: {
				          userName: '',
				          phone: '',
				          password: ''
				        },
				        rules: {
				          // userName: [
				          //   { validator: checkName, trigger: 'blur' }
				          // ],
				          phone: [
				            { validator: checkPhone, trigger: 'blur' }
				          ],
				          password: [
				            { validator: checkPassword, trigger: 'blur' }
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
			        },
					
					tiaozhuanRegister(){
						this.$router.push("/Register");
					}
			      }
	}		  
</script>

<style type="text/css">
	#Login{
		width: 500px ;
		height: 340px;
		margin:  0 auto;
		background-color: skyblue;
		border-radius: 5%;
	}
	#top{
		width: 100%;
		height: 50px;
		padding-left: 150px;
		margin: 20px 0;
	}
	#content{
		width: 400px;
		font-weight: bold;
	}
	#btnRegister{
	width: 500px;
	padding: 0 50px;
	/* margin-top: 30px; */
	margin: 20px 0;
	}
	
</style>