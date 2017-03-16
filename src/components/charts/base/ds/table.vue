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
			                        //是否显示下一页

                        if(that.$store.state.module_ds.default.page.pageListNum>that.$store.state.module_ds.default.page.totalPage){
                                var newPage=[];

                                for(var i=1;i<=that.$store.state.module_ds.default.page.totalPage;i++){
                                newPage.push(i);
                                }

                                that.$store.state.module_ds.default.page.pages=newPage
                        }
                        that.$store.state.module_ds.default.page.nextP=that.$store.state.module_ds.default.page.pageListNum<that.$store.state.module_ds.default.page.totalPage
                        that.$store.state.module_ds.default.page.placeholder="输入跳转页码，共("+that.$store.state.module_ds.default.page.totalPage+"页)"

		
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
