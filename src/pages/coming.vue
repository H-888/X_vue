<template>
  <div class="coming">
    	
    	<div class="movie_body">
    		
			<uc-cell
			    v-for="(item,index) of list"
			    :key="item._id"
			   :data="item" 
			   collectionName="coming"
			   isAdd @add-item="show"
			   />
			</div>
    	</div>
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’
import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'coming',
    props:{},
    data(){
      return {
        list:[]
        }
      
    },
    components:{
		UcCell
	},
    //生命周期 - 挂载完成
    mounted(){
		this.$axios({
			url:'/api/coming',
			headers:{token:1234567890987654},
			params:{_limit:20,_page:1}
		}).then(
			res=>{
				this.list=res.data.data
				// console.log(res.data)
			}
		)
	},
   //生命周期 - 更新完成
    updated(){},
   //方法集合
    methods:{
		show(){
			alert('预约成功')
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
