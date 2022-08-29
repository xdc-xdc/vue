import request from '../utils/request.js'

const getlist=(params)=>{
	return request({
		method:'GET',
		url:'/mv/exclusive/rcmd',
		params:params
	})
}

export default{
	getlist
}