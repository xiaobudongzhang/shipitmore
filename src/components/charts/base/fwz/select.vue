<template>
<div class="myselect">

     <div class="mytext ui  column grid">
          <div class="regiontext">服务者数据</div>
          <div class="datetext">时间</div>
     </div>

     <div class ="mysecond ui  column grid ">

     <div class="myregion ">
       <myregion firstType="Fwz" ></myregion>
     </div>

 

    <div class="myexport ">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>

    <div class="mydate ">
    <mydate   firstType="Fwz"></mydate>
    </div>

</div>

</div>



 

</div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import mydate from "../common/date"
import myregion from "../common/region_common"

export default{
       data(){
	return {
	               province_name:"请选择",
               city_name:"请选择",

	       region_name:"全国",
	       fws_name:'服务商姓名',
	       citys:this.$store.state.default.citys,
	       fws:this.$store.state.default.fws
	}
	
       },
       mounted(){
	
	//init
//        this.$store.dispatch('updateByRegionOfFwz')
       },
       methods:{
               
	  exportdata(){

		   this.$store.dispatch('download',{type:'fwz',name:'服务者'})

          }


       },
       components:{
	mydate,
	myregion
       }
       

}



</script>

<style rel="stylesheet/less" lang="less">

#chart_base_fwz_base_vue{
	.regiontext{
		width:260px;
	}

}
</style>