<template>
  <div class="reg">
  <header id="header">
  	<h1>注册喵喵</h1>
  </header>
   		<div class="reg_body">
			<div>
				<uc-input class="reg_text" v-model="username"  placeHolder="请输入账号"></uc-input>
			</div>
			<div>
				<uc-input class="reg_text" v-model="password" type="password"  placeHolder="请输入密码" ></uc-input>
			</div>
			<div>{{mess}}</div>
   			<div class="reg_btn">
   				<uc-button @click="reg" style="margin-top:.23rem" text="注 册">注 册</uc-button>
   			</div>
   			<div class="reg_link">
   				<router-link to="/login">返回登录</router-link>
   				<a href="#">找回密码</a>
   			</div>
   		</div>
  
   	
   
   
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’
import UcInput from '../components/uc-input/index.vue'
import UcButton from '../components/uc-button/uc-button.vue'
  export default {
    name:'app',
    props:{},
    data(){
      return {
        username:'',
        password:'',
		mess:''
      }
    },
    components:{
		UcButton,UcInput
	},
    //生命周期 - 挂载完成
    mounted(){},
   //生命周期 - 更新完成
    updated(){},
   //方法集合
    methods:{
		reg(){
			this.$axios({
				url:'/api/reg',
				method:'post',
				data:{
					username:this.username,
					password:this.password
				}
			}).then(
				res=>{
					if(res.data.err===0){
						this.$router.push('/login')
					}else{
						this.mess=res.data.msg
					}
				}
			)
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
  .reg_body{  width:100%;}
  .reg_body .reg_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
  .reg_body .reg_btn{ height:50px; margin:10px;}
  .reg_body .reg_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
  .reg_body .reg_link{ display: flex; justify-content:space-between;}
  .reg_body .reg_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>
