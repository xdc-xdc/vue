(self["webpackChunkmystudy"]=self["webpackChunkmystudy"]||[]).push([[54],{3119:function(e){
/*!
* screenfull
* v4.2.1 - 2019-07-27
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var n="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},t=e.exports,s="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,r=t.length,l={};s<r;s++)if(e=t[s],e&&e[1]in n){for(s=0;s<e.length;s++)l[t[0][s]]=e[s];return l}return!1}(),l={change:r.fullscreenchange,error:r.fullscreenerror},i={request:function(e){return new Promise(function(t,l){var i,c=r.requestFullscreen,u=function(){this.off("change",u),t()}.bind(this);this.on("change",u),e=e||n.documentElement,i=/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[c]():e[c](s?Element.ALLOW_KEYBOARD_INPUT:{}),Promise.resolve(i).catch(l)}.bind(this))},exit:function(){return new Promise(function(e){if(this.isFullscreen){var t=function(){this.off("change",t),e()}.bind(this);n[r.exitFullscreen](),this.on("change",t)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var s=l[e];s&&n.addEventListener(s,t,!1)},off:function(e,t){var s=l[e];s&&n.removeEventListener(s,t,!1)},raw:r};r?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(n[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(n[r.fullscreenEnabled])}}}),t?(e.exports=i,e.exports["default"]=i):window.screenfull=i):t?e.exports=!1:window.screenfull=!1})()},2054:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=function(){var e=this,n=e._self._c;return n("div",{staticClass:"content"},[n("div",{staticClass:"section"},[n("div",{staticClass:"title"},[e._v(" "+e._s(e.data.title)+" ")]),n("div",{ref:"image",staticClass:"image",on:{click:function(n){return e.fullScreen()}}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.data.image,alt:"",srcset:""}})]),n("div",{ref:"main",staticClass:"main"},[e._v(" "+e._s(e.data.conten)+" "),n("textarea",{staticStyle:{position:"fixed","z-index":"-99999999"},attrs:{id:"one"}}),n("div",{staticClass:"copy",on:{click:function(n){return e.copy()}}},[e._v(" 复制 ")])])])])},r=[],l=t(3119),i=t.n(l),c={data(){return{judge:!1,data:{},screen:!1}},mounted(){this.$route.query.id?this.contenFn(this.$route.query.id):this.judge=!0},methods:{fullScreen(){if(!i().enabled)return this.$message({message:"浏览器不能全屏，安装其他版本试试",type:"warning"}),!1;i().toggle(this.$refs.image),this.screen?(this.screen=!1,this.$message({message:"已退出全屏",type:"success"})):(this.screen=!0,this.$message({message:"已全屏",type:"success"}))},copy(){let e=document.getElementById("one");e.value=this.data.conten,e.select(),document.execCommand("copy"),this.$message({message:"复制成功",type:"success",duration:1e3})},contenFn(e){this.$api.nodeApi.selectInformationApi({id:e}).then((e=>{this.data=e.data[0],console.log(e)})).catch((e=>{this.judge=!0}))}}},u=c,o=t(2349),a=(0,o.Z)(u,s,r,!1,null,"730fe2b2",null),f=a.exports}}]);
//# sourceMappingURL=54.ec286401.js.map