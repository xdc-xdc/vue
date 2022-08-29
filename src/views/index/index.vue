<template>
	<div class="index">
		<!-- elementui栅格布局 -->
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="6" :md="12" :lg="6" :xl="1"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :xs="4" :sm="6" :md="12" :lg="6" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :xs="4" :sm="6" :md="12" :lg="6" :xl="11"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :xs="8" :sm="6" :md="12" :lg="6" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			async userApi(){
				// let data=await new Promise((resolve,reject)=>{
				// 	setTimeout(()=>{
				// 		resolve('成功')
				// 	},1000)
				// })
				// return data
				
				try{
					let data=await new Promise((resolve,reject)=>{
						setTimeout(()=>{
							resolve('成功')
						},1000)
					})
					return data
				}catch(e){
				console.log(new Error())
				}
				
			},
			routerApi(){
				this.userApi()//不会阻止之后的代码执行，因为这是async函数
				//如果要等待调用userApi执行完成后在执行之后的语句可以同理给routerApi添加asycn和await
				console.log("routerApi")
			}
		}
	}
</script>

<style>
	 .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
</style>