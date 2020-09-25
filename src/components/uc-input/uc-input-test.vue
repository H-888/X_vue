<template>
  <div id="app">
    <h3>测试shurukung</h3>
	<!-- @click.native 告诉，click这不是自定义事件，这是原生的 -->
	<UcInput />
	<uc-input v-model="ipt"></uc-input>
	<uc-input v-model="ipt2" type="password" label="密 码"></uc-input>
	
  </div>
</template>

<script>
	//写到文件目录，他会自动去找index这个文件
import UcInput from '../components/uc-input'

export default {
  name: 'App',
  data(){
	return{
		ipt:'bem',
		ipt2:'k5'
	}  
  },
  components: {
    UcInput
  },
  methods:{
	  
  }
}
</script>

<style>

</style>
