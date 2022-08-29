import request from '../utils/request.js'

//添加数据
const addInformationApi=(paarams)=>{
	return request({
		method:'POST',
		url:'/myInformation',
		data:paarams
	})
}

//删除介绍的数据
const removeInformationApi=(paarams)=>{
	return request({
		method:'POST',
		url:'/gethome',
		data:paarams
	})
}

// 删除数据
const removeIntroduce=(paarams)=>{
	return request({
		method:'POST',
		url:'/deleteHome',
		data:paarams
	})
}


//修改数据
const updateInformationApi=(paarams)=>{
	return request({
		method:'POST',
		url:'/updataInformation',
		data:paarams
	})
}

//修改介绍数据
const updateIntroduceApi=(paarams)=>{
	return request({
		method:'POST',
		url:'/updataIntroduce',
		data:paarams
	})
}

//查询数据(指定id查询)
const selectInformationApi=(paarams)=>{
	return request({
		method:'POST',
		url:'/posthome',
		data:paarams
	})
}

// 列表数据查询
const informationListApi=()=>{
	return request({
		method:'POST',
		url:'/homeLIst'
	})
}

// 介绍数据查询
const introduceListApi=()=>{
	return request({
		method:'POST',
		url:'/introduceList'
	})
}

export default{
	addInformationApi,
	removeInformationApi,
	updateInformationApi,
	selectInformationApi,
	informationListApi,
	introduceListApi,
	updateIntroduceApi,
	removeIntroduce
}