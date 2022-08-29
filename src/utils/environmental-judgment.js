// console.log(navigator.userAgent);
  // window.location.href=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?"pc端链接":"移动端链接";
	//手机端还是pc端判断
	// let flag=/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?"移动端":"pc端";
	// alert(flag)
	//手机端/平板端/pc端判断
	// console.log(navigator.userAgent);
	//   var os = function (){
	//     var ua = navigator.userAgent,
	//     isWindowsPhone = /(?:Windows Phone)/.test(ua),
	//     isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
	//     isAndroid = /(?:Android)/.test(ua),
	//     isFireFox = /(?:Firefox)/.test(ua),
	//     isChrome = /(?:Chrome|CriOS)/.test(ua),
	//     isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
	//     isPhone = /(?:iPhone)/.test(ua) && !isTablet,
	//     isPc = !isPhone && !isAndroid && !isSymbian;
	//     return {
	//         isTablet: isTablet,
	//         isPhone: isPhone,
	//         isAndroid: isAndroid,
	//         isPc: isPc
	//     };
	// }();
	
	// if (os.isAndroid || os.isPhone) {
	//   alert("手机")
	// } else if (os.isTablet) {
	//   alert("平板")
	// } else if(os.isPc) {
	//   alert("电脑")
	// }
	//iOS系统和Android系统判断
	// function getOSType() {
	//      if (/(Android)/i.test(navigator.userAgent)) {
	//          alert('0');//安卓
	//      } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	//          alert('1');//ios
	//      } else {
	//         alert('2');//不是ios也不是安卓系统
	//      }
	//  }
	//  console.log(getOSType())
	//判断是否在微信环境运行
	// function is_weixin(){
	//       var ua = navigator.userAgent.toLowerCase();
	//       if(ua.match(/MicroMessenger/i)=="micromessenger") {
	//            alert('微信环境');
	//      } else {
	//             alert('不是微信环境');
	//       }
	// }
	// is_weixin()