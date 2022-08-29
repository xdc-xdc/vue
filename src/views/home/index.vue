<template>
	<div class="index">
		<div class="header">
			header<button @click="choose(20)">choose</button>
		</div>
		<div style="width: 100%;height: 500px;background-color: deepskyblue;padding: 20px;box-sizing: border-box;	">
			<div>
				<h1>{{tow}}</h1>{{one}}
				<my @person_fn="person_list"></my>
				<userlist :userlist="[1,2,3]"></userlist>
				<!-- {{this.$store.state.count}} -->
				<activer :activer="'activer_pc'"></activer>
			</div>
			<h1>生成二维码</h1>
			<!-- <vueQr :size="200" :logoSrc="imageUrl" :text="vueQr_conten"></vueQr> -->
			<!-- 浏览器版本不一样，显示的不一样 max是设置最大值 默认1 value取值（0.01-1）-->
			<progress max="1" value="0.2">20%</progress>
			<button @click="arr_fn()">arr</button>
			{{arr[3]}}
			<h1>跳转到拨号界面</h1>
			<a href="tel:18327137881">18327137881</a><!-- 拨打电话-->
			<a href="sms:18327137881">18327137881</a><!-- 手机短信发送-->
		</div>
		<div class="main" v-for="(item,index) in dataList">
			<img :src="item.cover" alt="not image" width="100%" height="100%">
		</div>
		<div class="footer">
			footer
		</div>
		
	</div>
</template>

<script>
	import my from '../my/my.vue'
	export default{
		data(){
			return{
				dataList:null,
				number:20,
				arr:[1,2,3,4],
				vueQr_conten:'#小程序://海南免购/KgNCExgn7mgM82r',
				// imageUrl:require("../../assets/logo.png"),
				tow:0,
				one:1
			}
		},
		created() {
			this.homeList(),
			this.$bus.$on('person_fn',res=>{
				this.one=res
			})
		},
		components:{
			my
		},
		methods:{
			person_list(msg){
				this.tow=msg
			},
			arr_fn(){
				//this.$set(对象/数组，索引/键值/赋值)
				this.$set(this.arr,3,1)
				console.log(this.arr)
			},
			async choose(){
				var person={limit:this.number}
				this.dataList=await this.$api.home.getlist(person)
				if(this.number==20){
					this.dataList=this.dataList.splice(10)
					this.number=10
					return
				}
				this.number=20
			},
			// var person={limit:10}
			// this.$api.home.getList(person)
			async homeList(){
				var person={limit:10}
				this.dataList=await this.$api.home.getlist(person)
				console.log(this.dataList)
			}
		}
	}
</script>

<style lang="less" scoped>
	.index{
		width: 100%;
		background-color: mediumaquamarine;
		height: 100vh;
		animation: all 1s ease-in-out;
		.header{
			width: 100%;
			height: 100px;
			background-color: pink;
			text-align: center;
			font-size: 20px;
			line-height: 100px;
			font-weight: bold;
			color: #fff;
		}
		.main{
			width: 100%;
			height: 500px;
			background-color: red;
		}
	}
</style>