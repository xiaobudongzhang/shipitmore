<template>
<div>

  <div class="ui message">
  
    <p v-if="$store.state.module_dd.default.filter.threeType=='country'">数据明细</p>
    <p v-else-if="$store.state.module_dd.default.filter.threeType=='city'">{{$store.state.module_dd.default.filter.dateStart}}数据明细</p>
    <p v-else>{{$store.state.module_dd.default.filter.dateStart}}{{$store.state.module_dd.default.now.city_detail}}数据明细</p>
  </div>

<hr>


<button  @click="returnme"  v-if="threeType!='country'" class="ui primary basic button">返回</button>

<table class="ui celled table" id="tabledata">
 <caption id="tablecaption"></caption>
  <thead>
    <tr>
       <th>{{$store.state.module_dd.default.commons.firstThName}}</th>
       <th v-for="tab in tabs">{{tab.name}}</th>
       <th v-if="threeType!='detail'" >详情</th>
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_dd.default.tableList.trtotal">
      <td >{{$store.state.module_dd.default.tableList.tmpList[item-1].count}}</td>
      <td >{{$store.state.module_dd.default.tableList.zddList[item-1].count}}</td>
      <td >{{$store.state.module_dd.default.tableList.ddxqList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.cdjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.cdslList[item-1].count}}  </td>
      <td >{{$store.state.module_dd.default.tableList.tdjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.tdslList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzslList[item-1].count}} </td>
      <td v-if="threeType!='detail'"><a @click='xq' :data-val=$store.state.module_dd.default.tableList.tmpList[item-1].val :data-val2=$store.state.module_dd.default.tableList.tmpList[item-1].count :href=hrefVal >详情</a></td>
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">


<mypage v-if="threeType=='country'" firstType="Dd"></mypage>

    </th>
  </tr></tfoot>
</table>

</div>
</template>


<script  type="text/ecmascript-6">

import mypage from "../common/page"

var tabs=require('components/data/dd_country_chart_tab.json')


export default{
      
       data(){
	var store=this.$store.state.module_dd.default
       	
	return{
		firstThName:'日期',
		tabs:tabs,
		pages:[1,2,3,4,5],
		currentPage:1
		
                
	}
       },
       computed:{
	 hrefVal:function(){
		
		
		var type='city'
		if(this.threeType=='city'){
			type='detail'
		}
		return '#/charts/dd/'+type
	 }
       },
       mounted(){
       
		var that=this
		var first=this.$store.dispatch('initFirstAll',{region:true,type:'module_dd'})
		
		first.then((m)=>{
		
			that.$store.dispatch('initTableOfDd',{threeType:this.threeType}).then((msg)=>{

				that.$store.dispatch('updateTableOfDd')
		 	})
	
		})
	
       },
       created(){

       },
       methods:{
		
	xq(event){
		
		var val = event.target.getAttribute('data-val')
		var val2 = event.target.getAttribute('data-val2')
		this.$store.dispatch('updateXq',{val:val,val2:val2})
		
	},		
	returnme(){
		
		if(this.threeType=='city'){
			this.$router.push('/charts/dd/country/zdd')					
			this.$store.dispatch('returnme')
		}else if(this.threeType=='detail'){
			this.$router.push('/charts/dd/city')
			this.$store.dispatch('returnmedetail')
		}

		
	}	
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
