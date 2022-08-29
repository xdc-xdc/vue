<template>
	<div class="music">
		<!--返回 -->
		<div class="nav">
			<div class="return">
				<i class="el-icon-back" @click="returnPath()" v-if="returnJudge"></i>
				<i class="el-icon-s-home" @click="returnPath()" v-else></i>
			</div>
		</div>
		<section>
			<div class="music-conten" :style="{backgroundImage: 'url('+ imageUrl +')'}">
				<div class="music-main">
					<div class="main-left">
						<img :src="imageUrl" alt="" srcset="">
					</div>
					<div class="main-right">
						<div class="right-scrll" :style="{backgroundImage: 'url('+ imageUrl +')'}">
							<div class="scrll-round"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="operation">
				<i class="el-icon-caret-left operation-icon"></i>
				<i class="el-icon-video-play operation-icon"></i>
				<i class="el-icon-caret-right operation-icon"></i>
			</div>
		</section>
		
	</div>
</template>

<script>
	export default{
		props:{
			pathHistory:{
				type:Boolean,
				default:false
				
			}
		},
		data(){
			return{
				returnJudge:true,
				imageUrl:'https://images.pexels.com/photos/7406066/pexels-photo-7406066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
			}
		},
		mounted() {
			console.log(this.$route.query.pathHistory)
			if(this.$route.query.pathHistory){
				this.returnJudge=true
			}else{
				this.returnJudge=false
			}
		},
		methods:{
			returnPath(){
				if(this.pathHistory){
					this.$router.go(-1)
				}else{
					this.$router.push('/study')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.music{
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
		.nav{
			position: fixed;
			top: 0;
			left: 0;
			height: 75px;
			box-sizing: border-box;
			padding:10px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.return{
				font-size: 30px;
				font-weight: bold;
				color: #fff;
				transition: 1s all;
			}
			.return:hover{
				transform: scale(1.5);
			}
		}
		.music-conten{
			width: 100%;
			height: 100vh;
			background-size:100% 100%;
			// filter:blur(5px) ;
			background-repeat: no-repeat;
			display: flex;
			justify-content: center;
			align-items: center;
			.music-main{
				width: 75%;
				height: 80%;
				border-radius: 20px;
				overflow: hidden;
				display: flex;
				box-shadow: inset 0px 10px 10px #fff,inset 0px -10px 10px #fff;
				.main-left{
					flex: 3;
					background-color: yellow;
					z-index: 10;
					&>img{
						width: 100%;
						height: 100%;
					}
				}
				.main-right{
					flex: 2;
					display: flex;
					align-items: center;
					.right-scrll{
						position: absolute;
						width: 500px;
						height: 500px;
						border-radius: 100%;
						background-size: 100% 100%;
						background-repeat: no-repeat;
						transform: translateX(-10%);
						transition: 10s all;
						animation: scrll_move 10s linear infinite;
						box-sizing: border-box;
						padding: 50px;
						overflow: hidden;
						display: flex;
						align-items: center;
						justify-content: center;
						.scrll-round{
							width: 20%;
							height: 20%;
							background-color:rgba(255, 255, 255, .3);
							border-radius: 100%;
						}
					}
					@keyframes scrll_move{
						0%{
							transform:translateX(-10%)
						}
						100%{
							transform:translateX(-10%) rotateZ(360deg);
						}
					}
				}
			}
		}
		.operation{
			position: fixed;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			width: 100%;
			padding: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 50px;
			font-weight: bold;
			color: #fff;
			text-shadow: 0 -10px 20px #fff,0 10px 20px #fff;
		}
		.operation-icon{
			margin-right: 50px;
			transition: .5s all;
		}
		.operation-icon:hover{
			transform: scale(1.5);
		}
	}
</style>