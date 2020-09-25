<template>
  <div class="home">
   <div class="movie_body">
   	<uc-cell2
   	    v-for="(item,index) of list"
   	    :key="item._id"
   	   :data="item" 
   	   collectionName="home"
	   isAdd @add-item="show"
   	   />
   	</div>
   		
   </div>
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’
import UcCell2 from '../components/uc-cell/uc-cell2.vue'

// import axios from '../plugins/axios.js'
  export default {
    name:'home',
    props:{},
    data(){
      return {
        list:[
			// {_id:1,image:'/img/movie_1.jpg',title:'无名之辈',comment:'9.2',protagonist:'主演: 陈建斌,任素汐,潘斌龙',note:'今天55家影院放映607场'},
			// {_id:2,image:'/img/movie_2.jpg',title:'毒液：致命守护者',comment:'9.3',protagonist:'主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德',note:'今天56家影院放映443场'},
			// {_id:3,image:'/img/movie_1.jpg',title:'无名之辈',comment:'9.2',protagonist:'主演: 陈建斌,任素汐,潘斌龙',note:'今天55家影院放映607场'},
			// {_id:4,image:'/img/movie_2.jpg',title:'毒液：致命守护者',comment:'9.3',protagonist:'主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德',note:'今天56家影院放映443场'},
			// {_id:5,image:'/img/movie_1.jpg',title:'无名之辈',comment:'9.2',protagonist:'主演: 陈建斌,任素汐,潘斌龙',note:'今天55家影院放映607场'},
			// {_id:6,image:'/img/movie_2.jpg',title:'毒液：致命守护者',comment:'9.3',protagonist:'主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德',note:'今天56家影院放映443场'},
			// {_id:7,image:'/img/movie_1.jpg',title:'无名之辈',comment:'9.2',protagonist:'主演: 陈建斌,任素汐,潘斌龙',note:'今天55家影院放映607场'},
			// {_id:8,image:'/img/movie_2.jpg',title:'毒液：致命守护者',comment:'9.3',protagonist:'主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德',note:'今天56家影院放映443场'},
		]
      }
    },
    components:{
		UcCell2
	},
    //生命周期 - 挂载完成
    mounted(){
		this.$axios({
			url:'/api/home',
			headers:{token:1234567890987654},
			params:{_limit:20,_page:1}
		}).then(
			res=>{
				this.list=res.data.data
			// console.log(res.data.data)
			}
		
		)
	},
   //生命周期 - 更新完成
    updated(){},
   //方法集合
    methods:{
		show(){
			alert('购票成功')
		}
	},
   //生命周期 - 销毁完成
    destroyed(){

    }
  }
</script>

<style scoped>
  .home{}
 
  
 
  
</style>
