<template>

<div class="myselect">

     <!--<div class="mytext ui  column grid">
          <div class="regiontext">订单数据</div>
          <div class="datetext">时间</div>
     </div>-->

     <div class ="mysecond ui  column grid ">

          <div class="xzcstext">
    选择城市:
    </div>


     <div class="myregion ">
       <myregion  firstType="Hh" ></myregion>
     </div>

      <div class="mysearch" >
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_hh.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>

    
    <div class="sjtext">
   时间:
  </div>

    <div class="mydate ">
    <mydate    firstType="Hh"></mydate>
    </div>

        <div class="myexport ">
        <div class="myexbutton" @click="exportdata">导出</div>
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
                     //   return
                }

		this.$store.dispatch('resetSearchPage',{type:'hh'});
                this.$store.dispatch('updateFilterOfHh', {fwzName:name})
                this.$store.dispatch('updateTableOfHh')
          },
	  exportdata(){
//                exporttableme('会话');

 this.$store.dispatch('download',{type:'hh',name:'会话'})

          }


       },
       components:{
	mydate,
	myregion
       }
       

}



</script>

.myselect{
        .regiontext{
                width:560px !important;
        }

}
