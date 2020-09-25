<template>
 <div class="city_body">
 		<div class="city_list">
 			<div class="city_hot">
 				<h2>热门城市</h2>
 				<ul class="clearfix">
 					<li>上海</li>
 					<li>北京</li>
 					<li>上海</li>
 					<li>北京</li>
 					<li>上海</li>
 					<li>北京</li>
 					<li>上海</li>
 					<li>北京</li>
 				</ul>
 			</div>
 			<div class="city_sort">
 				<div>
 					<h2 id="A">A</h2>
 					<ul>
 						<li>阿拉善盟</li>
 						<li>鞍山</li>
 						<li>安庆</li>
 						<li>安阳</li>
 					</ul>
 				</div>
 				<div>
 					<h2 id="B">B</h2>
 					<ul>
 						<li>北京</li>
 						<li>保定</li>
 						<li>蚌埠</li>
 						<li>包头</li>
 					</ul>
 				</div>
 				<div>
 					<h2 id="C">C</h2>
 					<ul>
 						<li>阿拉善盟</li>
 						<li>鞍山</li>
 						<li>安庆</li>
 						<li>安阳</li>
 					</ul>
 				</div>
 				<div>
 					<h2 id="D">D</h2>
 					<ul>
 						<li>北京</li>
 						<li>保定</li>
 						<li>蚌埠</li>
 						<li>包头</li>
 					</ul>
 				</div>
 				<div>
 					<h2 id="E">E</h2>
 					<ul>
 						<li>阿拉善盟</li>
 						<li>鞍山</li>
 						<li>安庆</li>
 						<li>安阳</li>
 					</ul>
 				</div>
 				<div>
 					<h2 id="F">F</h2>
 					<ul>
 						<li>北京</li>
 						<li>保定</li>
 						<li>蚌埠</li>
 						<li>包头</li>
 					</ul>
 				</div>	
 			</div>
 		</div>
 		<div class="city_index">
 			<ul>
 				<li><a href="#A">A</a></li>
 				<li><a href="#B">B</a></li>
 				<li><a href="#C">C</a></li>
 				<li><a href="#D">D</a></li>
 				<li><a href="#E">E</a></li>
 				<li><a href="#F">F</a></li>
 				
 			</ul>
 		</div>
 	</div>
 
</template>

<script>
  //import 组件名称 from '组件路径’

  export default {
    name:'app',
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
  #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
  .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
  .city_body .city_list::-webkit-scrollbar{
      background-color:transparent;
      width:0;
  }
  .city_body .city_hot{ margin-top: 20px;}
  .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .city_body .city_hot ul{}
  .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
  .city_body .city_sort{}
  .city_body .city_sort div{ margin-top: 20px;}
  .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
  .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
  .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;position: fixed;right: 0;top: 50%;}
  .city_index ul li{margin-bottom: 10px;}
</style>
