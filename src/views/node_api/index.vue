<template>
	<div class="node-api">
		<form class="form-conten" action="" method="post" @submit.stop="">
			账号：<input type="text" v-model="user.username" class="user"><br />
			密码：<input type="password" v-model="user. password" class="password"/><br />
			<button @click="formApi()" class="submit">提交</button>
		</form>
		<!-- 添加数据 -->
		<form class="form-conten" action="#" method="post" @submit.prevent="">
			添加id：<input type="number" v-model="information.id" class="user distance-top"><br />
			标题：<input type="text" v-model="information.title" class="user distance-top"><br />
			内容：<input type="text" v-model="information.conten" class="user distance-top"><br />
			图片链接：<input type="text" v-model="information.image" class="user distance-top"><br />
			
			<button @click="informationApi()" class="submit">提交</button>
		</form>
		<!-- 修改数据 -->
		<form class="form-conten" action="#" method="post" @submit.prevent="">
			修改id：<input type="number" v-model="newInformation.id" class="user distance-top"><br />
			标题：<input type="text" v-model="newInformation.title" class="user distance-top"><br />
			内容：<input type="text" v-model="newInformation.conten" class="user distance-top"><br />
			图片链接：<input type="text" v-model="newInformation.image" class="user distance-top"><br />
			<button @click="updateApi()" class="submit">提交</button>
		</form>
		<!-- 修改介绍数据 -->
		<form class="form-conten" action="#" method="post" @submit.prevent="">
			修改介绍id：<input type="number" v-model="introduce.id" class="user distance-top"><br />
			标题：<input type="text" v-model="introduce.title" class="user distance-top"><br />
			内容：<input type="text" v-model="introduce.content" class="user distance-top"><br />
			note内容：<input type="text" v-model="introduce.note" class="user distance-top"><br />
			图片链接：<input type="text" v-model="introduce.image" class="user distance-top"><br />
		<button @click="updateIntroduceApi()" class="submit">提交</button>
		</form>
		<!-- 查询数据 -->
		<form class="form-conten" action="#" method="post" @submit.prevent="">
			查询id:<input type="number" v-model="selectId" class="user distance-top"><br />
			<button @click="selectApi()" class="submit">提交</button>
		</form>
		<!-- 删除 -->
		<form class="form-conten" action="#" method="post" @submit.prevent="">
			删除id:<input type="number" v-model="removeId" class="user distance-top"><br />
			<button @click="removeApi()" class="submit">提交</button>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				user:{
					username:'admin',
					password:'123456'
 				},
				information:{
					id:null,
					title:'',
					conten:'',
					image:''
				},
				introduce:{
					id:null,
					title:'',
					content:'',
					image:'',
					note:''
				},
				newInformation:{
					id:null,
					title:'',
					conten:'',
					image:''
				},
				selectId:null,
				removeId:null
			}
		},
		methods:{
			formApi(){
				
			},
			updateApi(){//修改数据
				this.$api.nodeApi.updateInformationApi(this.newInformation).then(res=>{
					console.log(res)
					this.newInformation={
						id:null,
						title:'',
						conten:'',
						image:''
					}
				}).catch(cat=>{
					console.log(cat)
				})
			},
			updateIntroduceApi(){//修改介绍数据
				this.$api.nodeApi.updateIntroduceApi(this.introduce).then(res=>{
					console.log(res)
					// this.introduce={
					// 	id:null,
					// 	title:'',
					// 	content:'',
					// 	image:'',
					// 	note:''
					// }
				}).catch(cat=>{
					console.log(cat)
				})
			},
			removeApi(){//删除数据
				this.$api.nodeApi.removeInformationApi({id:this.removeId}).then(res=>{
					console.log(res)
					this.removeId=null
				}).catch(cat=>{
					console.log(cat)
				})
			},
			selectApi(){//查询数据
			console.log(this.selectId)
				this.$api.nodeApi.selectInformationApi({id:this.selectId}).then(res=>{
					console.log(res)
					this.selectId=null
				}).catch(cat=>{
					console.log(cat)
				})
			},
			informationApi(){//添加数据
					this.$api.nodeApi.addInformationApi(this.information).then(res=>{
						console.log(res)
						this.information={
							id:null,
							title:'',
							conten:'',
							image:''
						}
					}).catch(cat=>{
						console.log(cat)
					})
			}
		}
	}
</script>

<style scoped lang="less">
	.node-api{
		.form-conten{
			width: 500px;
			height: auto;
			border: 1px solid black;
			box-sizing: border-box;
			padding: 20px;
			border-radius: 20px;
			margin: 100px auto;
			text-align: center;
			.user{
				width: 300px;
				height: 50px;
				padding-left: 10px;
				box-sizing: border-box;
				font-size: 10px;
				font-weight: 400;
			}
			.password{
				width: 300px;
				height: 50px;
				padding-left: 10px;
				box-sizing: border-box;
				font-size: 10px;
				font-weight: 400;
				margin-top: 20px;
			}
			.submit{
				margin-top: 20px;
				width: 200px;
				height: 50px;
				font-size: 10px;
				font-weight: bold;
				color: #fff;
				background-color: aqua;
				border-radius: 20px;
				border: none;
			}
			.distance-top{
				margin-top: 20px;
			}
		}
	}
</style>