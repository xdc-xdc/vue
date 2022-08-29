<template>
	<div class="login" v-cloak>
		<div class="login-conten">
			<div class="conten-left">
				<img src="https://image.meiye.art/pic_Unb1-GPmeiox1fSztu1T6" style="width: 100%;height: 100%;">
			</div>
			<div class="conten-right">
				<!-- 标题 -->
				<div class="right-title">
					Login
				</div>
				<!-- 介绍 -->
				<div class="right-text">
					<font>Welecome to Please confirm than you ary visting</font>
					<br />
					<font style="margin-top: 10px;display: inline-block;">http://www.then.com</font>
				</div>
				<!-- 账号 -->
					<div class="user">
						User Name<br />
						<input type="text" class="text" v-model="username" v-focus>
					</div>
					<!-- 密码 -->
					<div class="pass">
						Password<br />
						<form>
							<input type="password" class="password" v-model="pasword" autocomplete="off">
						</form>
					</div>
				<div class="right-choose">
					<div class="choose-checbox">
						<input type="checkbox" name="" id="" value="同意" v-model="flag">
						<div>Remenber Me</div>
					</div>
					<div class="choose-text">
						<a href="#">Forgett Password?</a>
					</div>
				</div>
				<button class="login-bt" @click="login()">Login</button>
				<div class="bottom-tetx">
					New user?<a href="#" style="margin-left: 10px;color: #7c4de8;text-decoration: none;">Signup</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				pasword:'',
				flag:false
			}
		},
		mounted() {
		},
		methods:{
			login(){
				if(this.flag){
					if(this.username.length>=6 && this.pasword.length>=6){
						// 测试账号
						if(this.username=='1457147329' || this.pasword=='123456'){
							var token='token'
							window.sessionStorage.setItem('token',token)
							this.$router.push('/study')
						}else{
							this.username=null
							this.pasword=null
							alert("账号或密码错误，请重新输入！")
						}
					}else{
						this.username=null
						this.pasword=null
						alert("账号或密码错误，请重新输入！")
					}
				}else{
					alert('同意授权才能登入！')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		text-decoration: none;
	}
	.login{
		display: flex;
		justify-content: center;
		align-items: center;	
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-image: url('https://image.meiye.art/pic_1628434034931');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	[v-cloak]{
	            display: none;
	        }
	.login-conten{
		width: 700px;
		height: 500px;
		box-sizing: border-box;
		border-radius: 20px;
		display: flex;
		background-color: yellow;
		overflow: hidden;
		box-shadow: 0px 10px 20px #fff,0 -10px 20px #fff;
	}
	.conten-left{
		overflow: hidden;
		width: 350px;
		height: 100%;
	}
	.conten-right{
		flex: 1;
		padding: 30px;
		text-align: left;
		background-color: #fff;
		box-sizing: border-box;
		position: relative;
	}
	.right-title{
		font-size: 30px;
		font-weight: bold;
		color: black;
	}
	.right-text{
		font-size: 10px;
		margin: 20px 0px;
		color: #bebebe;
	}
	.user,.pass{
		font-size: 15px;
		font-weight: 400;
		color: #bebebe;
	}
	input{
		outline: none;
	}
	input[type=checkbox]{
	    width: 15px;
	    height: 15px;
	    margin-top: 2px;
	    position: relative;
	}
	input[type=checkbox]::after {
	    position: absolute;
	    top: 0;
	    color: #000;
	    width: 15px;
	    height: 15px;
	    display: inline-block;
	    visibility: visible;
	    padding-left: 0px;
	    text-align: center;
	    content: ' ';
	    border-radius: 3px;
	}
	input[type=checkbox]:checked::after {
	    content: "✓";
	    color: #fff;
	    font-size: 10px;
	    line-height: 15px;
	    background-color: #7c4de8;
	}
	.text,.password{
		height: 40px;
		width: 90%;
		border-radius:  4px;
		border: 1px solid #bebebe;
		font-size: 15px;
		font-weight: 400;
		color: black;
		padding-left: 20px;
		box-sizing: border-box;
		margin-top: 20px;
	}
	.pass{
		margin-top: 20px;
	}
	.right-choose{
		width: 90%;
		box-sizing: border-box;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 10px;
		color: black;
	}
	.choose-checbox{
		display: flex;
		align-items: center;
	}
	.choose-text{
		font-size: 10px;
		font-weight: 400;
		color: #bebebe;
	}
	.login-bt{
		width: 90%;
		height: 50px;
		box-sizing: border-box;
		background-color: #7c4de8;
		border-radius: 4px;
		font-size: 7px;
		font-weight: 400;
		color: #fff;
		border: none;
		margin-top: 20px;
	}
	.bottom-tetx{
		position: absolute;
		font-size: 10px;
		font-weight: 400;
		color: #bebebe;
		left: 30px;
		bottom: 30px;
	}
</style>