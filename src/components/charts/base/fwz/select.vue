<template>
<div class="ui small   menu grey ">
  <div class="left menu">



 <myregion firstType="Fwz" class="item"></myregion>


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    
  </div>

  <div class="right menu">
      <div class="ui dropdown item">
           <mydate firstType="Fwz"></mydate>
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
//                exporttableme('服务者');
		   this.$store.dispatch('download',{type:'fwz',name:'服务者'})

          }


       },
       components:{
	mydate,
	myregion
       }
       

}



</script>