<template>
<div id="alltable">

<div class="ui message" v-if="$store.state.module_fc.default.mingxi">
{{$store.state.module_fc.default.mingxi}}
</div>
<hr>
<table class="ui large table" id="tabledata">
       <caption id="tablecaption"></caption>
  <thead>
    <tr>
       
       <th v-for="tab in $store.state.module_fc.default.tabList">{{tab.name}}</th>
       
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_fc.default.tableList.trtotal">
    <td>{{$store.state.module_fc.default.tableList.rqList[item-1].count}}</td>
      <td >{{$store.state.module_fc.default.tableList.trspList[item-1].count}}</td>
      <td >{{$store.state.module_fc.default.tableList.fwsmcList[item-1].count}} </td>
      <td >{{$store.state.module_fc.default.tableList.slList[item-1].count}} </td>
      <td >{{$store.state.module_fc.default.tableList.fcjeList[item-1].count}} </td>
   
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">
    	    <mypage firstType="Fc"></mypage>

    </th>
  </tr></tfoot>
</table>

</div>
</template>

<script  type="text/ecmascript-6">
import mypage from "../common/page"

export default{
      
       data(){

       	
	return{
		firstThName:'日期',
		currentPage:1
	}
       },
       computed:{
	 
       },
       mounted(){
		var that=this
		var init=this.$store.dispatch('initTableOfFc')
		
		init.then(res=>{
						
			this.$store.dispatch('updateTableOfFc')
			
		},error=>{
		
		}	
	);
		
       },
       beforeCreate(){
		
       },
       methods:{
	


       },
       components:{
	mypage
       }
       
}




</script>
<style>
#tablecaption{
display:none
}
</style>