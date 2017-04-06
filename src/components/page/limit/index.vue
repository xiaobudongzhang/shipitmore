<template>
<div id="limit">



<div v-for="(module_list,key) in $store.state.limits.default.dataList">

点击要设置权限的菜单
<div class="ui divider" ></div>
<!--
	<div class="ui three column grid">	
           <div v-for="menu in module_list" class="column">
             <button class="ui button" @click="selectFirst" :data-val=menu.module_name_alias>{{menu.module_name}}</button>
           </div>
        </div>
-->
	
<div class="ui divider"></div>

</div>
  

<!--选择要设置的权限  ss
  <div class="ui divider"></div>

  <router-view></router-view>  
-->

</div>
</template>

<script type="text/ecmascript-6">
import myregion from './template/region.vue'

  export default {
    components: {
       myregion    
    },
    data(){
      return {
        
      }
    },
    computed:{
      
    },
    created(){
	this.$store.dispatch('updateLimitList',{currentModule:'root'});
    },
    methods: {
      selectFirst(){
      	var val=event.target.getAttribute('data-val')
	
	this.$store.dispatch('updateLimitList',{currentModule:val});
			
      }
    },
    mounted(){
	
	
   }

  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "../../static/style/index";
  
  #limit {
    margin-left:20px;
  }

</style>
