<template>
<div>
<hr>

<table class="ui celled table" id="tabledata">
       <caption id="tablecaption"></caption>
  <thead>
    <tr>
     
       <th v-for="tab in $store.state.module_ds.default.tabList">{{tab.name}}</th>
       
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_ds.default.tableList.trtotal">
      <td >{{$store.state.module_ds.default.tableList.rqList[item-1].count}}</td>
      <td >{{$store.state.module_ds.default.tableList.fwzxmList[item-1].count}}</td>
      <td >{{$store.state.module_ds.default.tableList.trmcList[item-1].count}} </td>
      <td >{{$store.state.module_ds.default.tableList.zfjeList[item-1].count}} </td>
      <td >{{$store.state.module_ds.default.tableList.zfztList[item-1].count}} </td>
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">
    	     <mypage firstType="Ds"></mypage>
	
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
		
		this.$store.dispatch('initTableOfDs').then(res=>{
                           		
			that.$store.dispatch('updateTableOfDs')
		})
		
       },
       created(){
		
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
