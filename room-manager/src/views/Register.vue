<template>
  <div id="ReLogin">
	  <div id="top">
	  	  <el-radio-group v-model="labelPosition" size="small">
	      <el-radio-button label="left" >登录</el-radio-button>
	      <el-radio-button label="right"style="margin-left: 35px;">注册</el-radio-button>
	  </el-radio-group>
	  </div>
	  <div id="content">
	  	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	    <el-form-item label="用户名" prop="pass">
	      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="手机号" prop="checkPass">
	      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="密码" prop="age">
	      <el-input v-model.number="ruleForm.age"></el-input>
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
		el: "ReLogin",
		    data() {
				var checkAge = (rule, value, callback) => {
					  if (!value) {
						return callback(new Error('年龄不能为空'));
					  }
					  setTimeout(() => {
						if (!Number.isInteger(value)) {
						  callback(new Error('请输入数字值'));
						} else {
						  if (value < 18) {
							callback(new Error('必须年满18岁'));
						  } else {
							callback();
						  }
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
		        labelPosition: 'right',
				 ruleForm: {
				          pass: '',
				          checkPass: '',
				          age: ''
				        },
				        rules: {
				          pass: [
				            { validator: validatePass, trigger: 'blur' }
				          ],
				          checkPass: [
				            { validator: validatePass2, trigger: 'blur' }
				          ],
				          age: [
				            { validator: checkAge, trigger: 'blur' }
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
			        resetForm(formName) {
			          this.$refs[formName].resetFields();
			        }
			      }
		}
			  
</script>

<style type="text/css">
	#ReLogin{
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