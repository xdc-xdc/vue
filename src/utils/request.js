import axios from 'axios'

//动态设置链接
// let base = ''
// 判断环境变量 
//production =>是正式生产环境，程序最终发布后所需要的参数配置
//Dev=>开发环境，该环境下的配置项只影响开发人员本地代码配置，在项目初期代码本地编写时调试使用
//Test=>测试环境，该环境配置影响整个团队的测试环境
// if (process.env.NODE_ENV === 'production') {
//   base = ''
// } else {
//   base = '/api' // > 一般用于设置为/api然后使用代理进行本地跨域开发
// }
const requests=axios.create({
	// baseURL:process.env.VUE_APP_BASE_API,
	baseURL:'http://43.143.59.23',
	timeout:5000,
})
requests.interceptors.request.use(
	// config => {
	//         if (this.$store.state.token) {
	//             console.log(this.$store.state.token);
	//             config.headers['token'] = this.$store.state.token // 让每个请求携带自定义token 请根据实际情况自行修改
	//           }
	//         return config;
	//     },
	//     error => {
	//         // 请求错误处理
	//         return Promise.reject(error);
	//     }
	config=>{
		return config
	}
)

requests.interceptors.response.use((res)=>{
	return res
},(error)=>{
	return Promise.reject(new Error('faile'))
})

export default requests;
