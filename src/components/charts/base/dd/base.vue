<template>
<div id="chart_base_dd_base_vue">
     
 <myselect></myselect>
 
 <router-view></router-view>
 
</div>
</template>

<script type="text/ecmascript-6">
import myselect from './select'

export default {

  components:{
    myselect,
   },
   mounted(){
   
   }
}
</script>

<style rel="stylesheet/less" lang="less">
.myselect .mytext .regiontext{
	  //width:

}

       
</style>