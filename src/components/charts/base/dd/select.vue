<template>
<div class="myselect">

     <div class="mytext ui  column grid" v-if="$store.state.module_dd.default.filter.threeType=='country'">
     	  <div class="regiontext">订单数据</div>
	  <div class="datetext">时间</div>
     </div>

     <div class ="mysecond ui  column grid " >

     <div class="myregion "  v-if="$store.state.module_dd.default.filter.threeType=='country'">     
       <myregion v-if="$store.state.module_dd.default.filter.threeType=='country'" firstType="Dd" ></myregion>
     </div>

      <div class="mysearch " v-if="$store.state.module_dd.default.filter.threeType=='country'">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_dd.default.filter.fwsName placeholder="服务商姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>

    <div class="myexport" >
        <div class="myexbutton" @click="exportdata">导出</div>
    </div>

  
    <div class="mydate " v-if="$store.state.module_dd.default.filter.threeType=='country'"> 
    <mydate   v-if="$store.state.module_dd.default.filter.threeType=='country'" firstType="Dd"></mydate>
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
		this.$store.dispatch('download',{type:'dd',name:'订单'})
           // exporttableme('订单');
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
<style rel="stylesheet/less" lang="less">

</style>