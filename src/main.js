import Vue from 'vue'
import App from './layouts/App.vue'

import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
//基础css样式
import './assets/css/base.css';
import './assets/js/font.js';//字体比例值控制

import './assets/css/swiper-4.1.0.min.css';


// 引入路由的配置
import router from './plugins/router.js';
import axios from './plugins/axios.js'

// 引入全局过滤器
import './filters'

let vm=new Vue({
  render: h => h(App),
  router,
  data:{
	bNav:false,//导航一开始不显示
	bFoot:false,//底部一开始不显示
	bLoading:true//开始显示
	  
  }
}).$mount('#app')

export default vm;
