<template>
<div class="ui small   menu grey ">
  <div class="left menu">



<myregion firstType="Ds" class="item"></myregion>

    

    
    <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_ds.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button"  @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">




    <mydate firstType="Ds"></mydate>    

  

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

	       citys:this.$store.state.default.citys,
	       
	}
	
       },
       mounted(){
	
	//init
        
       },
       methods:{
	
         search(){

                var name=$("#searchname").val()
                if(name==""){
                        return
                }
                this.$store.dispatch('updateFilterOfDs', {fwzName:name})
                this.$store.dispatch('updateTableOfDs')
          },
	  startTime(){
        
           },
           endTime(){

                },
	exportdata(){
                exporttableme('打赏');


          }


       },
       components:{
	mydate,
	myregion

       }
       

}



</script>