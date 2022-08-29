<template>
	<div class="text">
	<!-- 	<button @click="runBtn()">开始</button>
		<button @click="stopBtn()">开始</button>
		{{content}} -->
		<baidumap v-if="1==1"></baidumap>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-main>
				<el-button type="primary" @click="updataFn()">添加数据</el-button>
				<el-table :data="homeList" border   style="width: 100%"  v-if="homeList.length>0">
				  <el-table-column
				      type="selection"
				      width="55">
					  </el-table-column>
					<el-table-column   prop="id" label="id">
					</el-table-column>
					<el-table-column prop="title" label="标题">
					</el-table-column>
					<el-table-column prop="conten" label="内容" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="image" label="链接地址" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="" label="编辑/保存"  width="200">
						<template slot-scope="scope">
						        <el-button type="primary" @click="updataFn(scope.row)">编辑</el-button>
						         <el-button type="danger" @click="edtiorFn(scope.row.id)">删除</el-button>
						    </template>
					</el-table-column>
				</el-table>
				<!-- 无数据展示 -->
				<el-empty :image-size="200" v-else></el-empty>
				<!-- 分页展示 -->
				<el-pagination
					v-if="homeList.length>0"
				  class="pagination"
				  background
				  layout="prev, pager, next"
				  :total="100">
				</el-pagination>
			</el-main>
		</el-container>
		
		<!-- 编辑弹窗 -->
		<el-dialog
		  title="编辑数据"
		  :visible.sync="dialogVisible"
		  width="70%"
		  :before-close="handleClose"
		>
		  id: <el-input v-model="updataList.id" placeholder="请输入内容"></el-input>
		  title: <el-input v-model="updataList.title" placeholder="请输入内容"></el-input>
		  conten: <el-input v-model="updataList.conten" placeholder="请输入内容"></el-input>
		  image: <el-input v-model="updataList.image" placeholder="请输入内容"></el-input>
		  <!-- 弹窗底部 -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="closeDialog()">取 消</el-button>
		    <el-button type="primary" @click="updataHttp()">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				updataList:{},
				dialogVisible:false,//编辑弹窗
				updateJudeg:false,//添加数据和编辑数据弹窗函数判断
				value:true,
				content:'这是一个测试~',
				runSet:null,
				homeList:[],
				edtior:false
			}
		},
	mounted() {
		//数据列表
		this.dataListFn()
	},
		methods:{
			// #########
			runBtn(){
				if(this.runSet==null){
					this.runSet= setInterval(()=>{
						var one=this.content.substring(0,1)
						var  tow = this.content.substring(1)
						this.content=tow+one
					},1000)
				}
			},
			stopBtn(){
				console.log("ad")
				if(this.runSet){
					clearInterval(this.runSet)
					this.runSet=null
					this.content='这是一个测试'
				}
			},
			// #########
			// 关闭弹窗的提示
			  handleClose(done) {
				  done();
				  this.updataList={}
			        // this.$confirm('确认关闭？')
			        //   .then(_ => {
			        //     done();
			        //   })
			        //   .catch(_ => {});
			      },
			  
			  // 初始化数据
			  dataListFn(){
				  this.$api.nodeApi.informationListApi().then(res=>{
				  	if(res.data.length>=1){
				  		console.log(res.data)
				  		this.homeList=res.data
				  	}
				  })
			  },
			changeSwitch(data){
				console.log(data.status)
			},
			closeDialog(){
				this.dialogVisible = false
				this.updataList={}
			},
			// 修改数据
			updataHttp(str){
				if(this.updataList.id){
					let then=this
					// 修改数据
					async function updata(){
						try{
							let data= await	then.$api.nodeApi.updateInformationApi(then.updataList)
							then.dataListFn()
							then.dialogVisible = false
							this.updateJudeg=false
							then.$message({
								message:'修改成功',
								type:'success',
								duration:1000
							})
						}catch(e){
							console.log(new Error())
						}
					}
					// 添加数据
					async function addList (){
						try{
							let data= await then.$api.nodeApi.addInformationApi(then.updataList)
							then.dataListFn()
							then.dialogVisible = false
							then.$message({
								message:'添加成功',
								type:'success',
								duration:1000
							})
						}catch(e){
							console.log(new Error())
						}
					}
					if(this.updateJudeg){
						updata()
					}else{
					addList()
					}
				}else{
					this.$message({
						message:'失败',
						type:'success',
						duration:1000
					})
				}
			},
			 updataFn(data){
				if(data){
					this.updataList=data
					this.updateJudeg=true
				}
				this.dialogVisible = true
			},
			// 添加数据
			addHomeList(){
				async function addDataList(){
					try{
						let data=await this.$api.nodeApi.addInformationApi()
						this.$message({
												 message:'添加成功',
												 type:'success',
												 duration:1000
						}) 
						this.dataListFn()
					}catch(e){
						//TODO handle the exception
						this.$message({
												 message:'添加失败',
												 type:'warning',
												 duration:1000
						}) 
					}
				}
				addDataList()
			},
			// 删除数据
			edtiorFn(id){
				var judeg= this.homeList.map(res=>{
					if(res.id===id){
						let  _then=this
						async function deleteFn(id){
							try{
								let  config={
									id:id
								}
								let new_data=await _then.$api.nodeApi.removeInformationApi(config)
								_then.edtior=!_then.edtior
								_then.dataListFn()
								return true
							}catch(e){
								//TODO handle the exception
								return false
							}
						}
						return deleteFn(res.id)
					}
				})
				console.log(judeg)
				if(judeg){
					 this.$message({
						 message:'删除成功',
						 type:'success',
						 duration:1000
					 }) 
					 return;
				}
				  this.$message({
						 message:'删除失败',
						 type:'warning',
						 duration:1000
				  }) 
			}
		}
	}
</script>

<style lang="less" scoped>
	.text {
		width: 100%;

		.el-container {
			height: 100vh;
		}

		.el-aside {
			background-color: #D3DCE6;
			color: #333;
			text-align: center;
			line-height: 200px;
		}

		.el-main {
			position: relative;
			background-color: #E9EEF3;
			color: #333;
			text-align: center;
			.el-empty{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
			.el-table{
				height: 80%;
				overflow: scroll;
				padding-left: 10px;
			}
			.el-pagination{
				height: 19%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			/deep/ .btn-prev{
				height: 70px;
				width: 70px;
			}
			/deep/ .btn-next{
				height: 70px;
				width: 70px;
			}
			/deep/ .el-pager li {
				line-height: 70px;
				height: 70px;
				width: 70px;
			}
		}
		/deep/  .cell{
			line-height: 30px;
		}
		/deep/ .has-gutter{
			height: 70px;
			font-size: 20px;
			color: #333;
		}
		/deep/ .el-table__row{
			height: 70px !important;
			font-size: 20px;
			font-weight: 400;
			color: #333;
		}
		
		 
			/deep/ .el-switch__core{
		    width:50px!important;
		    height:20px;
		    /*color:#409EFF;*/
		  }
		  /*设置圆*/
		  /deep/ .el-switch__core::after{
		    width:15px;
		    height:15px;
		    margin-top:0px;
		    margin-bottom: 1px;
		  }
	
	}
</style>
