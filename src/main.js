import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './components/index'//全局组件的封装
import './elementui/index.js'//elementui按需导入

import 'lib-flexible'//自适应插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//全局挂载$bus进行兄弟组件传值
//方法1
// import bus from '../src/utils/EventBus.js'
// Vue.prototype.$bus=bus
//方法2
Vue.prototype.$bus=new Vue()
import api from './api/index.js'
Vue.prototype.$api=api
Vue.config.productionTip = false;//在控制台有一句提示消息

new Vue({//开始实例化vue
	// beforeCreate(){//方法3
	// 	Vue.prototype.$bus=this
	// },
  router,
  store,
  render: (h) => h(App),//准备渲染app要买呢
}).$mount('#app');
