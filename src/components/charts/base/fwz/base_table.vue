<template>
<div>
<hr>

<table class="ui celled table" id="tabledata">
<caption id="tablecaption"></caption>
  <thead>
    <tr>
       <th>{{firstThName}}</th>
       <th v-for="tab in $store.state.module_fwz.default.tabList">{{tab.name}}</th>
       <!--<th v-if="threeType!='detail'">详情</th>-->
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_fwz.default.tableList.trtotal">
     <td>{{$store.state.module_fwz.default.tableList.dateList[item-1].count}}</td>
     <td >{{$store.state.module_fwz.default.tableList.drxzslList[item-1].count}}</td>
      <td >{{$store.state.module_fwz.default.tableList.fwzslList[item-1].count}} </td>
      <td >{{$store.state.module_fwz.default.tableList.sxztrsList[item-1].count}} </td>
      <td >{{$store.state.module_fwz.default.tableList.wgzrsList[item-1].count}}  </td>
      <td >{{$store.state.module_fwz.default.tableList.xxztrsList[item-1].count}} </td>
      <td >{{$store.state.module_fwz.default.tableList.ygzrsList[item-1].count}} </td>
      
     <!-- <td v-if="threeType!='detail'"><router-link :to=hrefVal>详情</router-link></td>-->
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">
      
      <mypage firstType="Fwz"></mypage>

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
	 hrefVal:function(){
		var type='city'
		if(this.threeType=='city'){
			type='detail'
		}
		return '/charts/fwz/'+type
	 }
       },
       mounted(){
		var that=this
		this.$store.dispatch('initTableOfFwz',{threeType:that.threeType}).then((msg)=>{
			that.$store.dispatch('updateTableOfFwz')
		},(err)=>{
		console.log(err)
		});
       },
       created(){
	
       },
       methods:{
	
       },
       components:{
	mypage
       },
       props: ['threeType']
       
}
</script>

<style>
#tablecaption{
display:none
}
</style>
