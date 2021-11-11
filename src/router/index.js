import Vue from 'vue'
import Router from 'vue-router'


import store from '../store/index'
Vue.use(Router)
const router = new Router({
	routes: [
		{ //测试页
			path: '/testPage',
			name: 'testPage',
			meta:{index:1000},
			component: resolve => require(['@/pages/downloadPage.vue'],resolve)
		},
		{
			path: '*',
			component:resolve => require(['@/pages/downloadPage.vue'],resolve)
			// component:NewIndex
			// component: LoadApp
			// component: resolve => require(['@/pages/testPage.vue'],resolve)
			// component:resolve => require(['@/pages/test07.vue'],resolve)//测试接收数据处理结果
			// component:resolve => require(['@/pages/setting/setmanage.vue'],resolve)
			// component:resolve => require(['@/pages/memory/memoryManage.vue'],resolve)
			// component:resolve => require(['@/pages/blueToothManage.vue'],resolve)
			// component:resolve => require(['@/pages/weld/welding.vue'],resolve)
			// component:resolve => require(['@/pages/weld/weld_tig_man.vue'],resolve)
			// component:resolve => require(['@/pages/testJ.vue'],resolve)
		}
	]
})
const normalPath = ['/login','/register','/beforeRegister','/forgotPassword','/develeperManage','/blueToothManage','/testPage','/setmanage','/newIndex','/modelList','loadApp']; //不需要蓝牙的页面
const normalPathStr = normalPath.join('') && (normalPath.join('')).toLocaleLowerCase();
const parentRouter =['/newIndex','/saveManage','/hisWeldList','/memoryManage'];
const parentRouterSrt =parentRouter.join('') && (parentRouter.join('')).toLocaleLowerCase();
router.beforeEach((to, from, next) => {
	//当前的路由
	store.state.nowRouter=to.path;
	store.state.routerOpreteTo=to.path;
    store.state.routerOpreteFrom=from.path;
	// alert(to.path+'||'+from.path);
	if(normalPathStr.indexOf(to.path && (to.path).toLocaleLowerCase()) > -1){//不需要蓝牙连接的页面
		// alert('kk')
		store.state.routerOprete='';
		next();
	}else{
		//  alert(store.state.getConnectStatus+'||')
		if(store.state.getConnectStatus=='connected'){
			//1、方案一：有值主动前往不是返回键
			// if(parentRouterSrt.indexOf(from.path && (from.path).toLocaleLowerCase()) > -1){
			// 	if(store.state.routerOprete){
			// 		store.state.routerOprete='';
			// 		next();
			// 	}
			// }else{
			// 	store.state.routerOprete='';
			// 	next();
			// }
			//2、方案二：
			// if(from.path=='/newIndex'){
			// 	if(store.state.routerOprete){
			// 		store.state.routerOprete='';
			// 		next();
			// 	}
			// }else if(from.path=='/memoryManage'){
			// 	// alert(11)
			// 	if(!store.state.routerOprete){//前往首页
			// 		// alert(store.state.routerOprete)
			// 		store.state.routerOprete=100;
			// 		next({ path: '/newIndex' });
			// 	}else{
			// 		// alert(store.state.routerOprete)
			// 		store.state.routerOprete='';
			// 		next();
			// 	}
			// }
			// else{
			// 	store.state.routerOprete='';
				// next();
			// }
			//方案三：
			// if(from.path=='/blueToothManage'){
			// 	if(store.state.routerOprete){
			// 		store.state.routerOprete='';
			// 		next();
			// 	}
			// }else if(from.path=='/newIndex'){
			// 	// alert(store.state.routerOprete);				
			// 	if(store.state.routerOprete){
			// 		store.state.routerOprete='';
			// 		next();
			// 	}
			// }else{
				next();
			// }
		}else{
			// Toast({
			// 	message: 'blueToothManaged'+store.state.getConnectStatus,
			// 	position: 'middle',
			// 	iconClass: 'icon icon-success',
			// 	duration: 1500
			// });
			store.state.routerOprete='';
			//前往蓝牙连接页
			next({ path: '/blueToothManage' });
		}
	}
	
	window.scrollTo(0, 0)
});

export default router;

