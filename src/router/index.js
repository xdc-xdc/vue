import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index/index.vue';

Vue.use(VueRouter);

const routes = [
	{
		path:'/',
		redirect:'/study'
	},
	{
	  path: '/index',
	  name: 'index',
		component:index
	},
  {
    path: '/home',
    name: 'home',
	component:()=>import('../views/home/index.vue')
  },
  {
    path: '/element',
    name: 'element',
  	component:()=>import('../views/element/component.vue')
  },
  {
    path: '/study',
    name: 'study',
  	component:()=>import('../views/study/index.vue')
  },
  {
    path: '/login',
    name: 'login',
  	component:()=>import('../views/login/index.vue')
  },
  {
    path: '/content',
    name: 'content',
  	component:()=>import('../views/study/content.vue')
  },
  {
    path: '/music',
    name: 'music',
  	component:()=>import('../views/music/index.vue')
  },
  {
    path: '/node_api',
    name: 'node_api',
  	component:()=>import('../views/node_api/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/my.vue'),
  },
  {
	  path:'/text',
	  name:'text',
	  component:()=>import('../views/text/index.vue')
  },
  {
  	  path:'/textOne',
  	  name:'textOne',
  	  component:()=>import('../views/text/text.vue')
  }
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to,form,next)=>{
// 	if(to.path!=='/login'){
// 		if(1==1){
// 			next()
// 		}
// 		next('/login')
// 	}
// 	next()
// })

export default router;
