<template>
  <div class="cinema">
   
   	<div class="cinema_menu">
   		<div class="city_switch">
   			全城 <i class="iconfont icon-lower-triangle"></i>
   		</div>
   		<div class="brand_swtich">
   			品牌 <i class="iconfont icon-lower-triangle"></i>
   		</div>
   		<div class="feature_switch">
   			特色 <i class="iconfont icon-lower-triangle"></i>
   		</div>
   	</div>
   	<div class="cinema_body">
   		<ul>
   			<li v-for="(item,index) of list" :key="index">
   				<div>
   					<span>{{item.name}}</span>
   					<span class="q"><span class="price">{{item.price}}.9</span> 元起</span>
   				</div>
   				<div class="address">
   					<span>{{item.site}}</span>
   					<span>{{item.distance}}</span>
   				</div>
   				<div class="card">
           			<div>小吃</div>
           			<div>折扣卡</div>
   				</div>
   			</li>
   			
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
        list:[
        			{_id:1,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:2,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:3,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:4,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:5,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:6,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:7,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:8,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:9,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:10,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			{_id:11,name:'大地影院(澳东世纪店)',price:'22.9',site:'金州区大连经济技术开发区澳东世纪3层',distance:'1763.5km',time:'2020-9-22'},
        			
        		]
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
 .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
   .cinema_body{ flex:1; overflow:auto;}
  .cinema_body ul{ padding:20px;}
  .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
  .cinema_body div{ margin-bottom: 10px;}
  .cinema_body .q{ font-size: 11px; color:#f03d37;}
  .cinema_body .price{ font-size: 18px;}
  .cinema_body .address{ font-size: 13px; color:#666;}
  .cinema_body .address span:nth-of-type(2){ float:right; }
  .cinema_body .card{ display: flex;}
  .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
  .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
  .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
