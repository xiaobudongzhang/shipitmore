<template>
<div id="alltable">


<table class="ui large table"  id="tabledata">
<caption id="tablecaption"></caption>

  <thead>
    <tr>
      
       <th v-for="tab in $store.state.module_hh.default.tabList">{{tab.name}}</th>
       
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_hh.default.tableList.trtotal">
      <td >{{$store.state.module_hh.default.tableList.rqList[item-1].count}}</td>
      <td >{{$store.state.module_hh.default.tableList.spidList[item-1].count}}</td>
      <td >{{$store.state.module_hh.default.tableList.hhspList[item-1].count}} </td>
      <td >{{$store.state.module_hh.default.tableList.tzrxmList[item-1].count}} </td>
      <td >{{$store.state.module_hh.default.tableList.hhcsList[item-1].count}} </td>
      <td >{{$store.state.module_hh.default.tableList.hhsList[item-1].count}} </td>
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">
      	      <mypage firstType="Hh"></mypage>
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
		
		var first=this.$store.dispatch('initFirstAll',{region:true,type:'module_hh'})

                first.then((m)=>{


			this.$store.dispatch('initTableOfHh').then(res=>{
		 		
				that.$store.dispatch('updateTableOfHh')
			})
		
		});		

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
