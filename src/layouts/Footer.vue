<template>
  <div id="footer-btn">
  
   	<ul>
		<router-link  to="/home" tag="li" active-class="active"><a href="javascript:;" ><i class="iconfont icon-dianying"></i><p>电影</p></a></router-link>
		<router-link to="/cinema" tag="li" active-class="active" ><a href="javascript:;"><i class="iconfont icon-yingyuan"></i><p>影院</p></a></router-link>
		<router-link  to="/user" tag="li" active-class="active"><a href="javascript:;" ><i class="iconfont icon-wode"></i><p>我的</p></a></router-link>
   		
   	</ul>
   
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’

  export default {
    name:'Footer',
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
  #footer-btn{ width:100%; height:50px; background: #fff; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
  #footer-btn ul{ display: flex; text-align: center; height:50px; align-items:center;}
  #footer-btn ul li{ flex:1; height:40px;}
  #footer-btn ul li.active a{ color: #f03d37;}
  #footer-btn ul i{ font-size: 20px;}
  #footer-btn ul p{ font-size: 12px; line-height: 18px;}
</style>
