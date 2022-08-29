<template>
  <div class="functions">
	  <i class="el-icon-error choose-icon" @click="closeBtn()"></i>
	  <div class="content" v-for="item in 3" @click="jumpFn('/textOne')">
	  	<div class="head-portrait">
	  		<img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
	  	</div>
	  	<div class="comments-content">
	  		this is a comments
	  	</div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'functions',
  data () {
    return {
      
    }
  },
  methods:{
	  closeBtn(){
	  	this.$emit('closeFunction',false)
	  },
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
  }
}
</script>

<style lang="less" scoped>
	.functions{
		width: 70%;
		height: 50%;
		min-width: 200px;
		min-height: 200px;
		padding: 50px;
		box-sizing: border-box;
		background-color: rgba(255, 255, 255, .7);
		box-shadow: 0px 5px 20px #000,inset 0px -10px 20px #000;
		overflow: hidden;
		border-radius: 20px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 100;
		.choose-icon{
			position: absolute;
			top: 9px;
			right: 10px;
			font-size: 25px;
			transition: .5s all;
			&:hover{
				transform: scale(1.2);
				border-radius: 100%;
				box-shadow:inset 10px 10px 10px #fff,inset -10px -10px 10px #fff;
			}
		}
		.content{
			box-sizing: border-box;
			margin-bottom: 20px;
			width: 100%;
			padding: 10px;
			display: flex;
			align-items: center;
			box-shadow: 0px 5px 20px #000,inset 0px -10px 20px #000;
			border-radius: 20px;
			transition: .5s all;
			color: #000;
			&:hover{
				background-color: rgba(0, 0, 0, .3);
				transform: scale(1.05);
				color: #fff;
			}
			.head-portrait{
				width: 50px;
				height: 50px;
				margin-right: 15px;
				border-radius: 100%;
				overflow: hidden;
				&>img{
					width: 100%;
					height: 100%;
				}
			}
			.comments-content{
				overflow:hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-o-text-overflow:ellipsis;
				font-size: 20px;
				font-weight: 400;
			}
		}
	}
</style>
