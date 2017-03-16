<template>
<div>
<hr>

<table class="ui celled table" id="tabledata">
 <caption id="tablecaption"></caption>
  <thead>
    <tr>
       <th>{{firstThName}}</th>
       <th v-for="tab in tabs">{{tab.name}}</th>
       <th v-if="threeType!='detail'">详情</th>
   </tr>
  </thead>
  <tbody>

    	
    <tr v-for="item in $store.state.module_dd.default.tableList.trtotal">
      <td>{{$store.state.module_dd.default.tableList.firstList[item-1].val}}</td>
      <td >{{$store.state.module_dd.default.tableList.zddList[item-1].count}}</td>
      <td >{{$store.state.module_dd.default.tableList.ddxqList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.cdjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.cdslList[item-1].count}}  </td>
      <td >{{$store.state.module_dd.default.tableList.tdjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.tdslList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzjeList[item-1].count}} </td>
      <td >{{$store.state.module_dd.default.tableList.bzslList[item-1].count}} </td>
      <td v-if="threeType!='detail'"><router-link :to=hrefVal>详情</router-link></td>
    </tr>
   

  </tbody>
  <tfoot>
    <tr><th colspan="10">
      <div class="ui right floated pagination menu">
        <a class="icon item" @click="prePage">
          <i class="left chevron icon"></i>
        </a>

        <a :class="item==currentPage?'item active':'item'" @click="page" v-for="item in pages" :data-val=item>{{item}}</a>
     

        <a class="icon item" @click="nextPage">
          <i class="right chevron icon"></i>
        </a>
	<div class="item">
  	         <div class="ui right labeled input">
      		 <input type="text" placeholder="输入跳转页码" id="pageGoto">
      		 <a class="ui label" @click="goto">跳转</a>
		</div>
        </div>
	
      </div>
    </th>
  </tr></tfoot>
</table>

</div>
</template>

<script  type="text/ecmascript-6">
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
		return '/charts/dd/'+type
	 }
       },
       mounted(){
		var that=this
		this.$store.dispatch('initTableOfDd',{threeType:this.threeType
}).then((msg)=>{
		 that.$store.dispatch('updateTableOfDd')
	})
	
       },
       created(){

       },
       methods:{
	
	page(env){
		
		var page=env.target.getAttribute('data-val')
		this.$data.currentPage=page
		this.$store.dispatch('updateTableOfDd',{page:page,threeType:this.threeType})
	},
	prePage(){
		var newPage=[]
		
		if(this.$data.currentPage<6){
			return;
		}
		this.$data.pages.forEach(function(val,key,array){
			
			newPage.push(val-5)
		});
		
		var page=newPage[0]
		
		this.$data.currentPage=page
		
		this.$store.dispatch('updateTableOfDd',{page:page,threeType:this.threeType})
		
		this.$data.pages=newPage
	},
	nextPage(){
		var newPage=[]
                this.$data.pages.forEach(function(val,key,array){
                        newPage.push(val+5)
                });
		
		var page=newPage[0]


                this.$data.currentPage=page

		this.$store.dispatch('updateTableOfDd',{page:page,threeType:this.threeType})

                this.$data.pages=newPage
	},
	goto(){
		var page=$("#pageGoto").val();
		
		var newPage=[];
		var startPage=page-page%5+1;
		var endPage=startPage+5;
		for(var i=startPage;i<endPage;i++){
 			newPage.push(i)
		}
		this.$data.currentPage=page;
		this.$data.pages=newPage		

		this.$store.dispatch('updateTableOfDd',{page:page,threeType:this.threeType})
	}

       },
       components:{
	
       },
       props: ['threeType']
       
}
</script>
<style>
#tablecaption{
display:none
}
</style>
