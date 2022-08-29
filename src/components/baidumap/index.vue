<template>
    <div class="map">
		<div class="map-title" :scroll-wheel-zoom="true" >
			<el-button type="success" :icon="1==1?'el-icon-s-home':'el-icon-back'" circle  @click="routerGo()" class="btnMap"></el-button>
			 <el-button type="success" icon="el-icon-map-location" circle  @click="getMap()" class="btnMap"></el-button>
			<el-input v-model="input" placeholder="请输入地址"></el-input>
			<el-button type="primary" class="btnMaps" @click="searchFn()">搜索</el-button>
		</div>
		<div id="container" class="containers"></div> 
	</div>
</template>

<script>
export default {
  name: 'baidumap',
  data () {
    return {
		map:{},
		point:{},
		judge:false,
		input:'海口',
		homeJudge:true
		}
  },
  mounted() {
  	this.loadJsScript()
	this.homeJudge=this.$route.pathHistory
  },
  methods:{
	  loadJsScript(){
		  // 创建百度地图资源引入
		  var scirpt=document.createElement("script");
		  scirpt.type='text/javascript'
		  scirpt.src="https://api.map.baidu.com/getscript?v=3.0&ak=hMDRMEQbDpygqGTGgFWfsItppeKp0GpQ&services=&t=20220816154130"
		  scirpt.onload=()=>{
			  this.init()
		  }
		  document.body.appendChild(scirpt)
	  },
	  
	  init(){//初始化地图
			  this.map = new BMap.Map("container"); 
			  this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			  this.map.enableScrollWheelZoom(true);  //鼠标缩放
			  
			  //开启控件
			  this.addControl()
	  },
	  addControl(){    //地图控件设置
		this.map.addControl(new BMap.NavigationControl());//缩放控制器
		// this.map.addControl(new BMap.ScaleControl());    
		// this.map.addControl(new BMap.OverviewMapControl());    
		this.map.addControl(new BMap.MapTypeControl());    //地图类型控件
		this.map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用     
	  },
	  stCtrlFn(){		  // 开通全景图功能（需要百度地图高级权限开启）
		  var stCtrl = new BMap.PanoramaControl();  
		  stCtrl.setOffset(new BMap.Size(20, 20));  
		  this.map.addControl(stCtrl);
	  },
	  searchFn(){
		  //用户授权获取当前地理位置
		  var then=this
		function myFun(result){
						then.map.setCenter(then.input);
					  }
		new BMap.LocalCity().get(myFun);
	  },
	  getMap(){
		  //用户授权获取当前地理位置
		  this.judge=confirm("获取当前地理位置？")
		  if(this.judge){
			  var then=this
			function myFun(result){
							var cityName = result.name;
							then.map.setCenter(cityName);
						  }
			  var myCity = new BMap.LocalCity();
			  myCity.get(myFun); 
			}
	  },
	  routerGo(){
		  if(this.homeJudge){
			  this.$router.push('/study');
			   return;
		  }
		  this.$router.go(-1)
		  
	  }
  }
}
</script>

<style lang="less" scoped>
	.map{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background-color: #fff;
			.map-title{
				display: flex;
				align-items: center;
				padding: 4px 20px;
				box-sizing: border-box;
				.btnMap{
					margin-right: 20px;
					margin-left: 0;
				}
				.btnMaps{
					margin-left: 20px;
				}
			}
			.containers{
				width: 100%;
				height: 100%;
			}
		}
</style>
