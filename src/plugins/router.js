import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NoPage from '../pages/no-page.vue';
import Home from '../pages/home.vue';
import Detail from '../pages/detail.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Coming from '../pages/coming.vue';
import Cinema from '../pages/cinema.vue';
import User from '../pages/user.vue';
import City from '../pages/city.vue';

let routes=[
	{path:'/home',component:Home},
	/* {path:'/detail',component:Detail,children:[
	  {path:':id',component:Detail}
	]}, */
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/Login',component:Login},
	{path:'/reg',component:Reg},
	{path:'/coming',component:Coming},
	{path:'/cinema',component:Cinema},
	{path:'/user',component:User},
	{path:'/city',component:City},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
];

let router =new VueRouter({
	routes
});

export default router;