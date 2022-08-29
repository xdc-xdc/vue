<template>
	<div class="content">
		<div class="section">
			<div class="title">
				{{data.title}}
			</div>
			<div class="image" @click="fullScreen()" ref="image">
				<img style="width: 100%;height: 100%;" :src="data.image" alt="" srcset="">
			</div>
			<div class="main" ref="main">
					{{data.conten}}
					<textarea id="one" style="position: fixed;z-index: -99999999;"></textarea>
				<!-- 点击复制 -->
				<div class="copy" @click="copy()">
					复制
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import screenfull from 'screenfull'
	export default{
		data(){
			return{
				judge:false,
				data:{},
				screen:false,//全屏判断
			}
		},
		mounted() {
			if(this.$route.query.id){
				this.contenFn(this.$route.query.id)
			}else{
				this.judge=true
			}
		},
		methods:{
			fullScreen () {
				    // 先使用screenfull.enabled方法判断是否支持screenfull
				   // 如果不允许进入全屏，发出不允许提示 浏览器不能全屏
				   if(!screenfull.enabled){
				         this.$message({
				             message:'浏览器不能全屏，安装其他版本试试',
				             type:'warning'
				         })
				         return false
				     }
				     // 调用 screenfull.toggle() 可以双向切换全屏与非全屏
					screenfull.toggle(this.$refs.image)
					if(this.screen){
						this.screen=false
						this.$message({
						     message: '已退出全屏',
						     type: 'success'
						 })
					}else{
						this.screen=true
						this.$message({
						     message: '已全屏',
						     type: 'success'
						 })
					}
				  },
			copy(){//复制内容
				let content=document.getElementById('one')
				content.value=this.data.conten
				content.select()
				document.execCommand('copy')
				this.$message({
					message:'复制成功',
					type:'success',
					duration:1000
				})
			},
			contenFn(id){
				this.$api.nodeApi.selectInformationApi({id:id}).then(res=>{
					this.data=res.data[0]
					console.log(res)
				})
				.catch(cat=>{
					this.judge=true
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	
	.content{
		width: 100%;
		min-height: 100vh;
		background-color: #fffcf5;
		color: #3c422e;
		.section{
			width: 90%;
			box-sizing: border-box;
			padding: 20px;
			text-align: center;
			margin: 0 auto;
			.title{
				line-height: 70px;
				font-size: 30px;
				font-weight: 400;
				color: #3c422e;
			}
			.image{
				width: 100%;
				height: 500px;
				overflow: hidden;
				border-radius: 5px;
				box-shadow: 0px 10px 20px #000;
				transition: .5s all;
			}
			.main{
				font-size: 20px;
				font-weight: 400;
				color: #3c422e;
				text-align: left;
				text-indent: 20px;
				margin-top: 20px;
				position: relative;
				clear: both;
				overflow: hidden;
				.copy{
					display: none;
					position: absolute;
					top: 0px;
					right: 0px;
					text-indent: 0;
					padding: 2px 5px;
					line-height: 20px;
					font-size: 20px;
					font-weight: 400;
					color: #fff;
					background-color: #3c422e;
					text-align: center;
					border-radius: 5px;
					border: 1px solid #fff;
				}
				&:hover .copy{
					display: inline-block;
				}
			}
		}
	}
</style>