File Edit Options Buffers Tools Help
<template>
<div>

<div class="ui  seven item menu">
  <a :class="tab.active? 'item active':'item'"  v-for="tab in chartTab" :href="'#/charts/dd/country/'+tab.alias"  @click='updateByType' :data-val=tab.alias>{{tab.name}} </a>
</div>

<router-view></router-view>

</div>
</template>
<script  type="text/ecmascript-6">
let chartTab=require('components/data/dd_country_chart_tab.json')

export default {
       data(){
	 return{
		chartTab:chartTab,
		options:{}
	 }
       },
       methods:{
	updateByType(event){
		var type=event.target.getAttribute('data-val')
		
		this.$store.dispatch('updateByTypeOfDd', { chartType:type })

	},

       },
       
     components:{

     },
     mounted(){
	var that=this	
	var first=this.$store.dispatch('initFirstAll',{region:true,type:'module_dd'})
	first.then((m)=>{
			that.$store.dispatch('updateByTypeOfDd', { chartType:'zdd' })
	});  

     }
}
</script>
<style rel="stylesheet/less" lang="less">
.ui.seven.item.menu{
	
	line-height:25px;
	a.item.active{
		font-size:17px;
		color:#34495e;
		border-top-width: 4px;
    		border-top-color: #527492;
    		border-top-style: inherit;
	}
	a.item{
		font-size:16px;
		color:#5c5f66;
	}	
	a{
		height:50px;
		width:188px;
	}

}
</style>