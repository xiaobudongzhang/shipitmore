<template>
<div >
	区域:
       <div class="ui dropdown item">
       全国 
       <i class="dropdown icon"></i> <div class="menu">
        <a class="item" @click="selectme" data-val="none">无</a>
	<a class="item" @click="selectme" data-val="all">全国</a>
        <a  v-for="city in $store.state.default.citys" class="item" @click="selectme" :data-val=city.pinyin>
	{{city.name}}
	</a>

      </div>
    </div>  

</div>
</template>

<script type="text/ecmascript-6">


  export default {
    components: {
 
    },
    data(){
      return {
        
      }
    },
    computed:{
      
    },
    created(){
 
    },
    methods: {
      selectme(){
	
      }
    },
   mounted(){
	$('.ui.dropdown').dropdown({
               on: 'hover'
        });

   }

  }
</script>

<style rel="stylesheet/less" lang="less">

  #limit {
    margin-left:20px;
  }

</style>
