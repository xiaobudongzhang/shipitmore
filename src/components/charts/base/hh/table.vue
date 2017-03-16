<template>
<div>
<hr>

<table class="ui celled table"  id="tabledata">
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
		this.$store.dispatch('initTableOfHh').then(res=>{
		 
			//是否显示下一页
                        if(that.$store.state.module_hh.default.page.pageListNum>that.$store.state.module_hh.default.page.totalPage){
                                var newPage=[];
				
                                for(var i=1;i<=that.$store.state.module_hh.default.page.totalPage;i++){
                                newPage.push(i);
                                }

                                that.$store.state.module_hh.default.page.pages=newPage
                        }
                        that.$store.state.module_hh.default.page.nextP=that.$store.state.module_hh.default.page.pageListNum<that.$store.state.module_hh.default.page.totalPage
                        that.$store.state.module_hh.default.page.placeholder="输入跳转页码，共("+that.$store.state.module_hh.default.page.totalPage+"页)"

		
			that.$store.dispatch('updateTableOfHh')
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
