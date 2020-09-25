<template>
  <div id="app">
	  <uc-cell :data="{_id:3,title:'xxxx',des:'oooo'}" :index="0" collectionName="detail"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxxx',des:'oooo'}"></uc-cell>
	  <uc-cell :data="{_id:3,title:'xxxx',des:'oooo'}" isAdd @add-item="show"></uc-cell>
	 
  </div>
</template>

<script>
	//写到文件目录，他会自动去找index这个文件
import UcCell from '../components/uc-cell/uc-cell.vue'

export default {
  name: 'App',
  data(){
	return{
		list:[]
	}  
  },
  components: {
    UcCell
  },
  mounted() {
  	setTimeout(()=>{
  		this.list=[
  			{_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
  			{_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
  			{_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
  			{_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
  		];
  	},1000)
  },
  methods:{
	  show(ev){
		  console.log(ev)
	  }
  }
}
</script>

<style>

</style>
