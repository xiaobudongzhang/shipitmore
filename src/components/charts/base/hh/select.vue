<template>
<div class="ui small   menu grey ">
  <div class="left menu">



<myregion firstType="Hh" class="item"></myregion>

     <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_hh.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>

    


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">




    <mydate firstType="Hh"></mydate>    

  

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
                this.$store.dispatch('updateFilterOfHh', {fwzName:name})
                this.$store.dispatch('updateTableOfHh')
          },
	  exportdata(){
                exporttableme('会话');


          }


       },
       components:{
	mydate,
	myregion
       }
       

}



</script>