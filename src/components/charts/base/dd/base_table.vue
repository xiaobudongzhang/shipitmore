<template>
<div>

<button  @click="returnme"  v-if="threeType!='country'" class="ui primary basic button">返回</button>



  
    <div id="uptable">
    <p v-if="$store.state.module_dd.default.filter.threeType=='country'">数据明细</p>
    <p v-else-if="$store.state.module_dd.default.filter.threeType=='city'">{{$store.state.module_dd.default.filter.dateStart}}</p>
    <p v-else>{{$store.state.module_dd.default.filter.dateStart}}{{$store.state.module_dd.default.now.city_detail}}</p>
    </div>
  



<table class="ui large table" id="tabledata">
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
      <!--<td >{{$store.state.module_dd.default.tableList.cdslList[item-1].count}}  </td>-->
      <td >{{$store.state.module_dd.default.tableList.tdjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.tdslList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzslList[item-1].count}} </td>
      <td v-if="threeType!='detail'"><a @click='xq' :data-val=$store.state.module_dd.default.tableList.tmpList[item-1].val :data-val2=$store.state.module_dd.default.tableList.tmpList[item-1].count :href=hrefVal :data-city=$store.state.module_dd.default.tableList.cityList[item-1].count>详情</a></td>
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
		 var cityCode = event.target.getAttribute('data-city')
		this.$store.dispatch('updateXq',{val:val,val2:val2,cityCode:cityCode})
		
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
<style rel="stylesheet/less" lang="less">

#dd_city_table{
button.ui.primary.basic.button{
    width: 15%;
    background-color: #527493 !important;
    margin-bottom: 10px;
    color: white !important;
    height: 34px;
    font-size:14px;	
}

}

#dd_detail_table {
button.ui.primary.basic.button{
    width: 15%;
    background-color: #527493 !important;
    margin-bottom: 10px;
    color: white !important;
    height: 34px;
    font-size:14px;
}

}


#uptable{

    border-style: outset;
    border-color:#c9caca;
    border-width:1px;

    
    width: 15%;
    border-bottom: snow;
    height: 50px;
    border-top-style: inset;
    border-top-color: #517599;
    border-top-width: 5px;
    text-align:center;
    font-size:18px;
    border-right-color: #c9caca;
    border-right-style: double;

}


#uptable p {
    line-height: 40px;
}

</style>
