<template>
 <!-- <div class="uc-cell">
    <div @click="toDetail">
			<h2><span v-show="index !==null">{{index +1}}.</span>{{data.title}}</h2>
			<p>{{data.des}}</p> -->
			<!-- .stop停止冒泡 -->
		<!-- 	<a class="cell__anchor" v-if="isAdd" href="javascript:;" @click.stop="$emit('add-item',$event)">+</a>
	</div>
  </div> -->
 <ul>
 	<li @click="toDetail">
 		<div class="pic_show"><img :src="data.detail.auth_icon" alt="" /> </div>
 		<div class="info_list">
 			<h2>{{data.title}}</h2>
 			<p>观众评 <span class="grade">{{data.grade}}</span></p>
 			<p>{{data.detail.auth}}</p>
 			<p>今天{{data.number}}家影院放映{{data.num}}场</p>
 		</div>
		<a class="btn_mall" v-if="isAdd"  @click.stop="$emit('add-item',$event)">购票</a>
 	</li>
 	
 </ul>

</template>

<script>
  //import 组件名称 from '组件路径’

  export default {
    name:'uc-cell2',
    props:{//结构
		data:{ //{_id:xx,titie:xx,des:xx}
			type:Object,
			required:true
		},
		collectionName:{//集合名
			type:String,
			default:null
		},
		index:{
			type:Number,
			default:null
		},
		isAdd:{//是否在单元格右侧传入东西
			type:Boolean,
			default:false
		}
	},
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
    methods:{
		toDetail(){
			if(this.collectionName){
				this.$router.push(`/Detail/${this.data._id}?collectionName=${this.collectionName}`)
			}
		}
	},
   //生命周期 - 销毁完成
    destroyed(){

    }
  }
</script>

<style scoped>
  .movie_body{ flex:1; overflow:auto;}
  .movie_body ul{ margin:0 12px; overflow: hidden;}
  .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
  .movie_body .pic_show{ width:64px; height: 90px;}
  .movie_body .pic_show img{ width:100%;}
  .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
  .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
  .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
  .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
  .movie_body .btn_pre{ background-color: #3c9fe6;}
</style>
