<template>
  <div class="detail" v-if="detail.title">
    
    	<div id="header">
    		<i class="iconfont icon-right" @click="$router.go(-1)"></i><h1>影片详情</h1>
    	</div>
    	<div id="content" class="contentDetail">
    		<div class="detail_list">
    			<div class="detail_list_bg"></div>
    			<div class="detail_list_filter"></div>
    			<div class="detail_list_content">
    				<div class="detail_list_img">
    					<img :src="detail.detail.auth_icon" alt="">
    				</div>
    				<div class="detail_list_info">
    					<h2>{{detail.title}}</h2>
    					<p>A Cool Fish</p>
    					<p>{{detail.grade}}</p>
    					<p>{{detail.des}}</p>
    					<p>中国大陆 / {{detail.num}}分钟</p>
    					<p>{{detail.time | date}}大陆上映</p>
    				</div>
    			</div>
    		</div>
    		<div class="detail_intro" v-html="detail.detail.content"></div>
    		<div class="detail_player swiper-container">
				<h1>演员表</h1>
    			<ul class="swiper-wrapper">
    				<li class="swiper-slide" v-for="item in list">
    					<div>
    						<img :src="item.detail.auth_icon" alt="">
    					</div>
    					<p>{{item.detail.auth}}</p>
    				</li>
    				
    			</ul>
    		</div>
    	</div>
    
  </div>
 <FrameScreen v-else />
</template>

<script>
  //import 组件名称 from '组件路径’
import Swiper from '../assets/js/swiper-4.1.0.min.js';
import FrameScreen from '../components/frame-screen.vue'
  export default {
    name:'detail',
    props:{},
    data(){
      return {
		  list:[],
		  detail:{},
       
      }
    },
    components:{
		FrameScreen
	},
    //生命周期 - 挂载完成
    mounted(){
		this.initSwipe();
		
		let collectionName=this.$route.query.collectionName;
		let _id=this.$route.params._id;
		this.$axios({
			url:`/api/${collectionName}/${_id}`
		}).then(
			res=>this.detail=res.data.data
		),
		this.$axios({
			url:'/api/banner',
			headers:{token:1234567890987654},
			params:{_limit:10,_page:1}
		}).then(
			res=>{
				this.list=res.data.data
			}
		)
		
		
		
	},
   //生命周期 - 更新完成
    updated(){
		this.initSwipe()
	},
   //方法集合
    methods:{
		initSwipe(){
			new Swiper('.detail_player',{
				slidesPerView : 'auto',
				freeMode : true,
				freeModeSticky: true
			});
			
		}
	},
   //生命周期 - 销毁完成
    destroyed(){
		
    }
  }
</script>

<style scoped>
	#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
	#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
	#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
  .contentDetail{ display: block; margin-bottom:0;}
  .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
  .detail_list .detail_list_bg{ width:100%; height:100%; background: url(../assets/img/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
  .detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
  .detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
  .detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
  .detail_list .detail_list_img img{ width:100%; height: 100%;}
  .detail_list .detail_list_info{ margin-top: 20px;}
  .detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
  .detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
  
  #content .detail_intro{ padding: 10px;font-size: 16px;}
  #content .detail_intro p{ padding: 10px;}
  #content .detail_player{ margin:20px;}
  .detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
  .detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
</style>
