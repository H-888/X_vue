<template>
  <div class="login">
  <header id="header">
  	<h1>登录喵喵</h1>
  </header>
   		<div class="login_body">
   			<div>
				<uc-input class="login_text" v-model="username"  placeHolder="请输入账号"></uc-input>
   			</div>
   			<div>
				<uc-input class="login_text" v-model="password" type="password"  placeHolder="请输入密码" ></uc-input>
   			</div>
			<div>{{mess}}</div>
   			<div class="login_btn">
				<uc-button @click="login" style="margin-top:.23rem" text="登 录">登 录</uc-button>
   			</div>
   			<div class="login_link">
   				<router-link to="/reg">注册账号</router-link>
   				<a href="#">找回密码</a>
   			</div>
   		</div>
  
   	
   
   
  </div>
</template>

<script>
  //import 组件名称 from '组件路径’
import UcButton from '../components/uc-button/uc-button.vue'
import UcInput from '../components/uc-input/index.vue'
  export default {
    name:'app',
    props:{},
    data(){
      return {
		username:'',
		password:'',
        mess:""
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
		login(){
			this.$axios({
				url:'/api/login',
				method:'post',
				data:{
					username:this.username,
					password:this.password
				}
			}).then(
				res=>{
					if(res.data.err===0){
						//钟localstrong，跳转到之前
						window.localStorage.setItem('user',JSON.stringify(res.data))
						if(!this.$route.query.p){
							this.$router.push('/user')
						}else{
							this.$router.push(this.$route.query.p)
						}
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
  .login_body{  width:100%;}
  .login_body .login_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
  .login_body .login_btn{ height:50px; margin:10px;}
  .login_body .login_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
  .login_body .login_link{ display: flex; justify-content:space-between;}
  .login_body .login_link a{ text-decoration: none; margin:0 5px; font-size: 12px; color:#e54847;}
</style>
