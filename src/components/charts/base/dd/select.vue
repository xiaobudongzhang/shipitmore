<template>
<div class="ui small   menu grey ">
  <div class="left menu">


   <div  v-if="$store.state.module_dd.default.filter.threeType=='detail'" class="item">
        {{$store.state.module_dd.default.now.city_detail}}
    </div>

       
       <myregion v-if="$store.state.module_dd.default.filter.threeType=='country'" firstType="Dd" class="item"></myregion>


      <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_dd.default.filter.fwsName placeholder="服务商姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">
    <mydate  v-if="$store.state.module_dd.default.filter.threeType=='country'" firstType="Dd"></mydate> 
     
    <div  v-if="$store.state.module_dd.default.filter.threeType!='country'" class="item">
        {{$store.state.module_dd.default.filter.dateStart}}
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
	
	//console.log(this.$store.state.module_dd.default.filter.threeType)
	//init
       // this.$store.dispatch('updateByRegionOfDd')
       },
       methods:{
	
	  exportdata(){
            exporttableme('订单');
          },
	  search(){

                var name=$("#searchname").val()
                if(name==""){
                        //return
                }
                this.$store.dispatch('updateFilterOfDd', {fwsName:name,mytype:'search'})
		this.$store.dispatch('updateChart')
                this.$store.dispatch('updateTableOfDd')
          }
	  
       },
       components:{
		mydate,
		myregion
       }

}
</script>
