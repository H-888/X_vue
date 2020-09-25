<template>
  <div class="uc-button">
    <button 
	class="login-btn" 
	:style="{background:bgColor}" 
	@click="$emit('click',$event)">
	
	<template v-if="text!=='按钮'">{{text}}</template>
	<slot v-if="text=='按钮'">按 钮</slot>  <!-- 插槽 -->
	</button>
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’

  export default {
    name:'uc-button',
    props:{
		text:{
			type:String,
			default: '按 钮'
		},
		bgColor:{
			type:String,
			default:'#e54847'
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
  .uc-button {
  }
  .login-btn {
    width: 100%;
    height: 0.65rem;
    background: #4c4f50;
    color: #fff;
    text-align: center;
    line-height: 0.65rem;
    border-radius: 8px;
    display: block;
    margin-top: 0.62rem;
    font-size: 0.28rem;
    border:none;
    outline: none;
  }
</style>
