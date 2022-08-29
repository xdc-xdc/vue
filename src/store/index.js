import Vue from 'vue';
import Vuex from 'vuex';
import edtis from './modules/edits/index.js'
import user from './modules/user'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
	  user:user,
	  edtis:edtis
  },
});