<template>
	<div class="homeList">
		<div :class="dataList.length>2?'list':'list list-copy'">
			<div class="lis-image" v-for="item in dataList" :key="item.id" @click="jumpFn(item.id)">
				<img class="image" :src="item.image" alt="" srcset="">
				<p class="list-title">{{item.title}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'homeList',
		props:{
			homeList:{
				type:Array,
				// required:true
			}
		},
		data(){
			return{
				dataList:[]
			}
		},
		watch:{
			 homeList: {
			    　　handler(newName, oldName) {
							this.dataList=newName
			    　　},
			    　　immediate: true
			    }
		},
		created() {
			this.$nextTick(()=>{
				this.dataList=this.homeList
			})
		},
		methods:{
			jumpFn(id){
				this.$router.push({
					path:'/content',
					query:{
						id:id
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@media screen and (max-width:1200px){
		.lis-image{
			width: 47% !important;
		}
	}
	@media screen and (max-width:900px){
		.lis-image{
			width: 100% !important;
			margin-right: 0 !important;
		}
		.homeList{
			padding: 20px 10px !important;
			justify-content: none !important;
			text-align: center;
		}
	}
	.homeList{
		width: 100%;
		padding: 40px 20px 0px;
		box-sizing: border-box;
		background-color: #fff;
		.list{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}
		.list-copy{
			justify-content: flex-start;
		}
		.lis-image{
			width: 31.33%;
			height: 300px;
			border-radius: 20px;
			box-sizing: border-box;
			overflow: hidden;
			box-shadow: 0px 5px 10px  #000, 0px -10px 10px  #000;
			transition: .5s all;
			margin-right: 20px;
			margin-bottom: 40px;
			text-align: center;
			.image{
				width: 100%;
				height: 250px;
			}
			.list-title{
				font-size: 20px;
				font-weight:  bold;
				line-height: 50px;
				margin: 0px auto ;
				text-shadow:  0px 7px 10px  black;
				transition: .5s all;
			}
			.list-title:hover{
				transform: scale(1.2);
			}
			&:hover{
				transform: scale(1.05);
			}
		}
	}
</style>