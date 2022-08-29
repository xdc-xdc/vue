import request from '../utils/request.js'

const getMusic=(params)=>{
	return request({
		method:'GET',
		url:'/user/playlist?uid=32953014',
		params:params
	})
}

export default{
	getMusic
}