<template>
	<div class="app">
		<Loading v-show="$root.bLoading" />
		<Header v-show="$root.bNav"/>
		<router-view />
		<Footer v-show="$root.bFoot" />
	</div>
	
	
</template>

<script>

import Header from './header.vue'
import Footer from './Footer.vue'
import Loading from '../components/loading.vue'
export default {
  name: 'App',
  data(){
	  return{}
  },
 watch:{
   $route:{//监听$roote
     handler(newVal){//函数传入一个参数
       let path = newVal.path; //要打开页面的地址
       if(/home|coming/.test(path)){ //正则
         this.$root.bNav=true;
         this.$root.bFoot=true;
       }
       if(/user|cinema/.test(path)){
         this.$root.bNav=false;
         this.$root.bFoot=true;
       }
       if(/login|reg|Detail/.test(path)){
         this.$root.bNav=false;
         this.$root.bFoot=false;
       } 
	   if(/city/.test(path)){
         this.$root.bNav=true;
         this.$root.bFoot=false;
       }
     },
     immediate:true  //打开页面就开始检测
   }
 },
  components: {
  Header,Footer,Loading
  }
}
</script>

<style>

</style>
