<template>
	<div class="study">
		<!-- 导航栏 -->
		<div :class="cssFlag?'study-header':'study-scorll'">
			<div class="header-left">
				<i class="el-icon-s-operation" @click="choose_judge=!choose_judge"></i>
			</div>
			<div class="header-right">
				<div>
					<!-- 消息 -->
					<i class="el-icon-chat-dot-round header-icon" @click="messageJudge=!messageJudge"></i>
					<!-- 联系 -->
					<i class="el-icon-s-promotion header-icon"></i>
					<!-- 工具 -->
					<i class="el-icon-setting header-icon" @click="functionJudeg=!functionJudeg"></i>
					<!-- 登录 -->
					<i class="el-icon-user-solid header-icon" @click="jumpFn('/login')"></i>
					<!-- 全屏展示 -->
					<i class="el-icon-rank header-sull" @click="fullScreen()"></i>
				</div>
				<div class="right-nav" v-if="1==2">
					
				</div>
			</div>
		</div>
		<!-- 功能导航 -->
		<functions @closeFunction="functionJudeg=!functionJudeg" v-if="functionJudeg"></functions>
		<!-- 导航栏右侧组件 -->
		<comments :class="messageJudge?'message':'message message-antion'" @closeBtn="messageJudge=!messageJudge"></comments>
		<!-- 内容主题 -->
		<section>
			<!-- 第一主题 -->
			<div class="section-main" v-if="introduceData.length>0">
				<div class="main-img">
					<img :style="{width: (imgJudge? '':'100vw')}" :src="introduceData[0].image" alt="图片地址错误" srcset="" @click="imgJudge=!imgJudge" ref="imageurl">
				</div>
				<div class="main-information" :style="{width: (imgJudge? '':'100vw')}">
					<div class="information-conten">
						<div class="conten-header">{{introduceData[0].note}}</div>
						<div class="conten-title">{{introduceData[0].title}}</div>
						<div class="conten-introduce">{{introduceData[0].content}}</div>
						<div class="conten-bottom">{{introduceData[0].note}}</div>
					</div>
				</div>
			</div>
			<!-- 第二主题 -->
			<div :class="author_judge?'theAuthor':'theAuthor author-css' ">
				<ul class="author-ul">
					<li class="ul-li" v-for="item in 3">
						<div class="author">
							<div class="author-title">
								Wallpaper
							</div>
							<div class="author-introduce">
								"A radical reinterpretation of mobile tech"
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 数据列表 -->
			<homeList :homeList="homeList"></homeList>
			<!-- 主题 -->
			<div class="section-main" v-if="introduceData.length>1">
				<div class="main-information" :style="{width: (imgJudge? '':'100vw')}">
					<div class="information-conten">
						<div class="conten-header" v-show="imgJudge">{{introduceData[1].note}}</div>
						<div class="conten-title" v-show="imgJudge">{{introduceData[1].title}}</div>
						<div class="conten-introduce" v-show="imgJudge">{{introduceData[1].content}}</div>
						<div class="conten-bottom" v-show="imgJudge">{{introduceData[1].note}}</div>
					</div>
				</div>
				<div class="main-img">
					<img :style="{width: (imgJudge? '':'100vw')}" :src="introduceData[1].image" alt="图片地址错误" srcset="" @click="imgJudge=!imgJudge" ref="imageurl">
				</div>
			</div>
			<!-- 第三主题 -->
			<div v-if="introduceList.length>0">
				<div class="section-main" v-for="(item,index) in introduceList" :key="item.id">
					<div class="main-img">
						<img :src="item.image" alt="图片地址错误" srcset="">
					</div>
					<div class="main-information">
						<div class="information-conten">
							<div class="conten-header">{{item.note}}</div>
							<div class="conten-title">{{item.title}}</div>
							<div class="conten-introduce">{{item.content}}</div>
							<div class="conten-bottom">{{item.note}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nac-bottom">
				<ul class="author-ul">
					<li class="ul-li" v-for="item in 3">
						<div class="author">
							<div class="author-title">
								Wallpaper
							</div>
							<div class="author-introduce">
								"A radical reinterpretation of mobile tech"
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<!-- 选项悬浮 -->
		<div class="choose-conten" v-if="choose_judge" @click.self="choose_judge=false">
			<div class="choose" v-if="choose_judge">
				<i class="el-icon-error choose-icon" @click="choose_judge=!choose_judge"></i>
				<div class="choose-list" v-for="item in 9">
					<img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" alt="" srcset="">
					<p>Pure Instinct</p>
				</div>
			</div>
		</div>
		<!-- 选项弹窗的伴随动画 -->
		<div class="choose-one" v-if="choose_judge">
			
		</div>
		<!-- 选项弹窗的伴随动画 -->
		<div class="choose-tow" v-if="choose_judge">
			
		</div>
		<!-- 选项弹窗的伴随动画 -->
		<div class="choose_animation" v-if="choose_judge">
			<!-- <div class="animation_person"></div> -->
		</div>
		<!-- 音乐悬浮 -->
		<div class="music-conten">
			<div class="music">
				<img :src="musicUrl" alt="图片无效" srcset="">
				<i class="el-icon-caret-right music-icon"></i>
			</div>
			<div class="music-choose">
				<i class="el-icon-caret-left music-choose-icon"></i>
				<i class="el-icon-service music-choose-icon" @click="jumpFn('/music')"></i>
				<i class="el-icon-caret-right music-choose-icon"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import screenfull from 'screenfull'
	export default{
		data(){
			return{
				windowHeight:0,
				author_judge:true,
				messageJudge:true,//消息弹窗
				cssFlag:true,//导航栏判断
				screen:false,//全屏判断
				choose_judge:false,//选项弹窗,
				homeList:[],//数据列表,
				introduceData:[{}],//介绍列表
				introduceList:[],//介绍列表循环
				imgJudge:true,
				functionJudeg:false,
				musicUrl:'https://cdn.shopify.com/s/files/1/0585/2479/5086/files/2Image_1280x1020_57e85d83-a863-4ae2-9d65-01c13ca9cd72_2040x.png?v=1658153419',
				imagUrl:'https://cdn.shopify.com/s/files/1/0585/2479/5086/files/2Image_1280x1020_57e85d83-a863-4ae2-9d65-01c13ca9cd72_2040x.png?v=1658153419'
			}
		},
		mounted() {
			// 数据列表
			this.$api.nodeApi.informationListApi().then(res=>{
				if(res.data.length>=1){
					this.homeList=res.data
				}
			})
			// //介绍列表
			this.$api.nodeApi.introduceListApi().then(res=>{
				if(res.data.length>=1){
					this.introduceData=res.data
					this.introduceList=res.data.slice(2)
				}
			})
			window.onscroll=()=>{
				//导航栏设置
				let window=document.documentElement.clientHeight
				let windowHeight=document.documentElement.scrollTop
				if(windowHeight>0){
					this.author_judge=false
					if(windowHeight<this.windowHeight){
						this.cssFlag=true
						this.windowHeight=windowHeight
					}else{
						this.cssFlag=false
						this.windowHeight=windowHeight
					}
				}else{
					this.author_judge=true
					this.cssFlag=true,
					this.windowHeight=0
				}
			}
		},
		methods:{
			jumpFn(path){
				if(path!=''){
					this.$router.push({
						path:path,
						query:{
							pathHistory:true
						}
					})
				}
			},
			image_fn(){
				
			},
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
					screenfull.toggle()
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
				  }
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../assets/study.css');
	.study{
		background-color: #f4f4f2;
		box-sizing: border-box;
		// min-width: 960px;
		overflow: hidden;
		.study-scorll{
			display: none;
		}
		.study-header{
			height: 75px;
			display: flex;
			justify-content: space-between;
			align-items:center;
			box-sizing: border-box;
			padding: 0 30px;
			transition: .5s all;
			animation: move .5s linear;
			position: fixed;
			width: 100%;
			left: 0;
			top: 0;
			z-index: 10;
			.header-left{
				font-size: 20px;
				font-weight: bold;
				font-style: italic;
				color:black; 
				padding: 5px;
				transition: .5s all;
			}
			.header-left:hover{
				box-shadow: -10px 10px 10px 10px #fff,10px -10px 10px 20px #fff;
				border-radius: 100%;
				transform: scale(1.2);
			}
			.header-right{
				padding: 5px;
				transition: .5s all;
				font-size: 20px;
				font-weight: bold;
				color:black; 
			}
			.header-icon{
				margin-right: 40px;
			}
			.header-sull:hover{
				box-shadow: 10px 10px 10px 10px #fff,-10px -10px 10px 20px #fff;
				border-radius: 100%;
				transform: scale(1.2);
			}
			.header-icon:hover{
				box-shadow: 10px 10px 10px 10px #fff,-10px -10px 10px 20px #fff;
				border-radius: 100%;
				transform: scale(1.2);
			}
		}
		.message{
			position: fixed;
			bottom: 1px;
			right: 0;
			z-index: 100;
			transition: 1s all;
			transform: translateY(100%);
		}
		.message-antion{
			transform: translateY(0);
		}
		@keyframes move {
			0%{
				transform: translateY(-75px);
			}
			100%{
				transform: translateY(0);
			}
		}
		@keyframes moves {
			0%{
				transform: translateY(0);
			}
			100%{
				transform: translateY(-75px);
			}
		}
		@keyframes section_move {
			0%{
				transform: translateX(40%);
			}
			100%{
				transform: translateX(0);
			}
		}
		// 背景内容
		.section-main{
			width: 100%;
			height: 100vh;
			display: flex;
			.main-img{
				flex: 3;
				height: 100%;
				&>img{
					width: 100%;
					height: 100%;
				}
			}
			.main-information{
				flex: 1;
				height: 100%;
				background-color: #f4f4f2;
				position: relative;
				.information-conten{
					width: 100%;
					height: auto;
					position: absolute;
					left: 0;
					bottom: 0;
					padding-left: 20px;
					padding-bottom: 20px;
					box-sizing: border-box;
					transition: 1s all;
					animation: section_move 1s linear;
					.conten-header{
						font-size: 20px;
						font-weight: 400;
						color: black;
					}
					.conten-title{
						font-size: 50px;
						font-weight: 400;
						color: black;
						margin-top: 20px;
						text-shadow:  0px 7px 10px  black;
						transition: .5s all;
					}
					.conten-title:hover{
						transform: scale(1.1);
					}
					.conten-introduce{
						font-size: 20px;
						  word-wrap:break-word;
						  word-break: break-all;
						font-weight: 400;
						color: black;
						margin-top: 20px;
					}
					.conten-bottom{
						margin-top: 20px;
						font-size: 20px;
						font-weight: 400;
						color: black;
					}
				}
			}
		}
		.author-css{
			transform: rotateX(0) !important;
		}
		// 第二主题
		.theAuthor{
			transition: 1s all;
			transform: rotateX(-90deg);
			padding: 50px;
			background-color: #f4f4f2;
			.author-ul{
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 0;
				.ul-li:nth-child(2){
					margin: 0 20px;
				}
				.ul-li{
					list-style: none;
					flex: 1;
					// .author:hover{
					// 	transform: scale(1.2);
					// }
					.author{
						width: 100%;
						text-align: center;
						// transition: .5s all;
						.author-title{
							font-size: 20px;
							font-weight: bold;
							font-style: initial;
							color: black;
							transition: .5s all;
							text-shadow:  0px 2px 5px  black;
						}
						.author-title:hover{
							transform: scale(1.2);
						}
						.author-introduce{
							margin-top: 20px;
							font-size: 20px;
							font-weight: 400;
							color: black;
							transition: .5s all;
							text-shadow:  0px 5px 5px  black;
						}
						.author-introduce:hover{
							transform: scale(1.2);
						}
					}
				}
			}
			
		}
		.nac-bottom{
			width: 100%;
			padding: 20px;
			background-color: #dcd7d2;
			display: flex;
			box-sizing: border-box;
			.author-ul{
				padding: 0;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 0 20px;
				.ul-li{
					list-style: none;
					flex: 1;
					.author{
						width: 100%;
						text-align: center;
						.author-title{
							font-size: 20px;
							font-weight: bold;
							font-style: initial;
							color: black;
						}
						.author-introduce{
							margin-top: 20px;
							font-size: 10px;
							font-weight: 400;
							color: black;
						}
					}
				}
			}
		}
		.choose-conten{
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
		}
		// 选项弹窗
		.choose::-webkit-scrollbar {display: none; /* Chrome Safari */}
		.choose{
			min-width: 750px;
			overflow: scroll;
			width: 70%;
			height: 70%;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			z-index: 40;
			border-radius: 50px;
			box-sizing: border-box;
			padding: 20px 50px;
			background-color: rgba(255, 255, 255, .3);
			box-shadow: inset 0 10px 10px #fff,inset 0 -10px 10px #fff;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.choose-icon{
				position: fixed;
				top: 25px;
				right: 30px;
				font-size: 20px;
			}
			.choose-list{
				text-overflow: ellipsis;
				overflow: hidden;
				margin-top: 20px;
				width:30%;
				height: 200px;
				background-color: rgba(255, 255, 255, .3);
				border-radius: 20px 20px;
				transition: 1s all;
				margin-right: 20px;
				padding: 10px;
				box-sizing: border-box;
				text-align: center;
				&>img{
					width: 100%;
					height: 150px;
					border-radius: 20px;
				}
				&>p{
					font-size: 20px;
					font-weight: bold;
					color: black;
					text-shadow:  0px 2px 5px  black;
					margin-top: 0;
					margin-bottom: 0;
				}
			}
			.choose-list:hover{
				transform: scale(1.2);
			}
		}
		
		@keyframes choose_move {
			0%{
				
			}
			25%{
				transform: translateY(100px) scale(1);
			}
			40%{
				transform: translateX(-200px) scale(2);
			}
			60%{
				transform: translateY(-500px) scale(1);
			}
			75%{
				transform: translateX(1000px) scale(2);
			}
			100%{
				transform: translate(0,0,0) scale(1);
			}
		}
		@keyframes choose_moveone {
			0%{
				
			}
			25%{
				transform: translateY(-100px) scale(1);
			}
			40%{
				transform: translateX(200px) scale(2);
			}
			60%{
				transform: translateY(500px) scale(1);
			}
			75%{
				transform: translateX(-1000px) scale(2);
			}
			100%{
				transform: translate(0,0,0) scale(1);
			}
		}
		@keyframes choose_movetow {
			0%{
				
			}
			25%{
				transform: translateY(-300px) scale(1);
			}
			40%{
				transform: translateX(400px) scale(2);
			}
			60%{
				transform: translateY(-500px) scale(1);
			}
			75%{
				transform: translateX(7000px) scale(2);
			}
			100%{
				transform: translate(0,0,0) scale(1);
			}
		}
		.choose-tow{
			transition: 10s all;
			animation: choose_moveone 10s linear infinite;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			box-shadow: inset 0 10px 10px #fff,inset 0 -10px 10px #fff;
			z-index: 30;
			position: fixed;
			left: 10%;
			bottom: 30%;
		}
		.choose-one{
			transition: 10s all;
			animation: choose_movetow 10s linear infinite;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			box-shadow: inset 0 10px 10px #fff,inset 0 -10px 10px #fff;
			z-index: 30;
			position: fixed;
			left: 20%;
			bottom: 30%;
		}
		.choose_animation{
			width: 50px;
			height: 50px;
			border-radius: 100%;
			box-shadow: inset 0 10px 10px #fff,inset 0 -10px 10px #fff;
			z-index: 30;
			position: fixed;
			left: 20%;
			bottom: 30%;
			transition: 10s all;
			animation: choose_move 10s linear infinite;
		}
		//音乐悬浮
		@keyframes music_move {
			0%{
				
			}
			100%{
				transform: rotateZ(360deg);
			}
		}
		.music-conten{
			position: fixed;
			left: 20px;
			bottom: 20px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;
			.music-choose{
				font-size: 30px;
				font-weight: bold;
				transition: 1s all;
				transform: translateX(-200px);
			}
			&:hover .music-choose{
				transform: translateX(0px);
				z-index: 10;
			}
			.music-choose-icon{
				margin-right: 10px;
			}
			.music-choose-icon:nth-child(1){
				margin-left: 10px;
				transition: 1s all;
			}
			.music-choose-icon:hover{
				transform: scale(1.1);
			}
		}
		.music{
			width: 50px;
			height: 50px;
			border-radius: 100%;
			overflow: hidden;
			transition: 10s all;
			animation: music_move 10s linear infinite;
			z-index: 30;
			&>img{
				width: 100%;
				height: 100%;
			}
			&:hover .music-icon{
				transition: .5s all;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				color: #fff;
				font-size: 25px;
			}
		}
	}
</style>