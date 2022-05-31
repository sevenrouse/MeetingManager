<template>
	<el-container>
		<!-- 头部导航栏 -->
	  <el-header>
		  <div id="myhead_content">
		  	<span>会议室预约管理系统</span>
		  </div>
	  </el-header>
	  
	  <!-- 侧边栏 -->
	  <el-container>
	    <el-aside width="200px">Aside</el-aside>
		
		<!-- 主页面 -->
	    <el-main>Main</el-main>
	  </el-container>
	  
	  
	</el-container>
</template>

<script>
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
		height: 100%;
		
	}
	 .el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>
