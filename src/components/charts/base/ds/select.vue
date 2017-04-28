<template>

<div class="myselect">

     <div class="mytext ui  column grid">
          <div class="regiontext">订单数据</div>
          <div class="datetext">时间</div>
     </div>

     <div class ="mysecond ui  column grid ">

     <div class="myregion ">
       <myregion  firstType="Ds" ></myregion>
     </div>

      <div class="mysearch " >
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_ds.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>

    <div class="myexport ">
        <div class="myexbutton" @click="exportdata">导出</div>
    </div>

    <div class="mydate ">
    <mydate    firstType="Ds"></mydate>
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
                      //  return
                }
                this.$store.dispatch('updateFilterOfDs', {fwzName:name})
                this.$store.dispatch('updateTableOfDs')
          },
	  startTime(){
        
           },
           endTime(){

                },
	exportdata(){
//                exporttableme('打赏');
 this.$store.dispatch('download',{type:'ds',name:'打赏'})

          }


       },
       components:{
	mydate,
	myregion

       }
       

}



</script>