<template>
  <div class="uc-input">
	<!-- @input是自定义事件 --><!-- 当我点击input时，获取到点击的值 -->
    <input :type="type" :value="value" :placeholder="placeHolder" @input="$emit('input',$event.target.value)" />
	<span v-if="label">{{label}}</span>
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’

  export default {
    name:'uc-input',
    props:{
		label:{
			type:String,
			default:''
		},
		type:{
			type:String,
			default:'text'
		},
		value:{
			type:String,
			default:''
		},
		placeHolder:{
			type:String,
			default:''
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
    methods:{},
   //生命周期 - 销毁完成
    destroyed(){

    }
  }
</script>

<style scoped>
  .uc-input {
    border-bottom:1px solid #e5e7e8;
    position: relative;
    height: 0.95rem;
  }
  .uc-input input{
    width:4.54rem;height:100%; font-size:0.3rem;
  }
  .uc-input span{
    width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;
  }
</style>
