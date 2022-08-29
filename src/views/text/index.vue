<template>
	<div class="text">
		<div class="text-header">
			<div class="header-lef">
				text
			</div>
			<div class="header-right">
				right
			</div>
		</div>
		
		<div class="conten-text">
			<p class="text-title">HELLO WORLD</p>
			<p class="text-list">this is hello world </p>
			<p class="text-list">hello world</p>
			<p class="text-bottom">hello world =></p>
			<p class="text-bottom-left">hello world hello world hello world hello world</p>
			<div class="text-border"></div>
		</div>
			
			<div style="width: 100vw;height: 100vh;overflow-x: scroll;" class="conten-scorll-main">
				<div class="conten-scorll" style="width: 200vw;height: 100vh;">
					<div class="conten">
						<div class="conten-image"></div>
						<div class="conten-image-tow"></div>
						<div class="conten-image-three"></div>
						<div class="conten-image-four"></div>
						<div class="conten-image-five"></div>
					</div>
					<div class="conten">
						<div class="conten-image"></div>
						<div class="conten-image-tow"></div>
						<div class="conten-image-three"></div>
						<div class="conten-image-four"></div>
						<div class="conten-image-five"></div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.text{
		// min-width: 1024px;
		background-color: #fffcf9;
		width: 100%;
		height: 100vh;
		.text-header{
			width: 100%;
			height: 0.75rem;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 0.3rem;
			font-weight: bold;
			color: black;
			padding:0px  0.5rem;
			border-bottom: 0.02rem solid black;
			position: fixed;
			top: 0px;
			left: 0px;
			z-index: 10;
		}
		.conten-text{
			z-index: 10;
			width: max-content;
			color: black;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-40%);
			text-align: center;
			.text-title{
				font-size: 0.5rem;
				margin-top: 0;
				margin-bottom: 0;
			}
			.text-list{
				font-size: 0.3rem;
				margin-top: 0;
				margin-bottom: 0;
			}
			.text-bottom{
				font-size: 0.3rem;
				margin-top: 0.2rem;
				margin-bottom: 0;
			}
			.text-bottom-left{
				font-size: 0.2rem;
				margin-top:0.4rem;
				margin-bottom: 0px;
				text-align: left;
				box-sizing: border-box;
			}
			.text-border{
				height: 0.02rem;
				width: 0.4rem;
				background-color: black;
				margin-top: 0.4rem;
			}
		}
		@keyframes move {
			0%{
				
			}
			100%{
				transform: translateX(-100vw);
			}
		}
		.conten-scorll{
			animation: move 10s linear infinite;
		}
		.conten-scorll-main::-webkit-scrollbar {display: none; /* Chrome Safari */}
		.conten{
			width:100vw;
			height:100vh;
			position: relative;
			float: left;
			.conten-image{
				width: 30%;
				height: 40%;
				background-color: deeppink;
				position: absolute;
				top: 0;
				left: 35%;
			}
			.conten-image-tow{
				width: 30%;
				height: 50%;
				background-color: deeppink;
				position: absolute;
				bottom: 0;
				left: 0;
			}
			.conten-image-three{
				width: 20%;
				height: 25%;
				background-color: deeppink;
				position: absolute;
				top: 0;
				left: 0;
			}
			.conten-image-four{
				width: 30%;
				height: 65%;
				background-color: deeppink;
				position: absolute;
				bottom: 0;
				right: 50px;
			}
			.conten-image-five{
				width: 23%;
				height: 25%;
				background-color: deeppink;
				position: absolute;
				bottom: 0;
				left: 40%;
			}
			}
	}
</style>