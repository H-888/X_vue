<template>
  <div class="head">
   <div id="header">
   	<h1>喵喵电影</h1>
   </div>
   
   <div class="movie_menu">
   	<div class="city_name">
		<router-link to="/city">
   		<span>大连</span><i class="iconfont icon-lower-triangle"></i></router-link>
   	</div>
   	<div class="hot_swtich">
   		<!-- <div class="hot_item active">正在热映</div> -->
		<!-- <div class="hot_item">即将上映</div> -->
		<router-link class="hot_item" to="/home" tag="div" active-class="active"><a href="javascript:;" >正在热映</a></router-link>
		<router-link class="hot_item" to="/coming" tag="div" active-class="active"><a href="javascript:;" >即将上映</a></router-link>
   	</div>
   	<div class="search_entry">
   		<i class="iconfont icon-sousuo"></i>
   	</div>
   </div>
  </div>
</template>
<script>
  //import 组件名称 from '组件路径’
  export default {
    name:'Header',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    //生命周期 - 挂载完成
    mounted(){},
   //生命周期 - 更新完成
    updated(){},
   //方法集合
    methods:{},
   //生命周期 - 销毁完成
    destroyed(){

    }
  }
</script>

<style scoped>
  .head{}
  #header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
  #header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
  #header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
  
  .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
  .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;display: inline;}
  .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
  .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
  .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
  .movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
  .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
  .movie_menu .search_entry.active a{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
  .movie_menu .search_entry i{  font-size:24px; color:red;}
  
</style>
