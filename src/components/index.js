import Vue from 'vue'
import userlist from './userlist'
import activer from './activer'
import comments from './comments'
import upload from './upload'
import homeList from './listComponents/homeList' 
import baiDuMap from './baidumap'
import functions from './functions'
//生成二维码组件
import vueQr from 'vue-qr'
let arr=[['vueQr',vueQr]]
Vue.component(...arr[0])
Vue.component(userlist.name,userlist)
Vue.component(activer.name,activer)
Vue.component(functions.name,functions)
Vue.component(comments.name,comments)
Vue.component(homeList.name,homeList)
Vue.component(userlist.name,userlist)
Vue.component(baiDuMap.name,baiDuMap)