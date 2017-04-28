File Edit Options Buffers Tools Help
<template>
<div id="fwz_country_chart">

<div class="ui six item menu">
  <a :class="tab.active? 'item active':'item'"  v-for="tab in chartTab" :href="'#/charts/fwz/country/'+tab.alias"   @click='updateByType' :data-val=tab.alias>{{tab.name}} </a>
</div>


<router-view></router-view>


</div>
</template>
<script  type="text/ecmascript-6">
let chartTab=require('components/data/fwz_chart_tab.json')




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

                this.$store.dispatch('updateByTypeOfFwz', { chartType:type })
          }	

       },
       
     components:{
   
     },
     mounted(){
	var that=this
        var first=this.$store.dispatch('initFirstAll',{region:true,type:'module_fwz'})

        first.then((m)=>{
		that.$store.dispatch('updateByTypeOfFwz', { chartType:'fwzsl' })
     	});
     
     }
}
</script>

<style rel="stylesheet/less" lang="less">
.ui.six.item.menu{

        line-height:25px;
        a.item.active{
                font-size:20px;
                color:#34495e;
                border-top-width: 4px;
                border-top-color: #527492;
                border-top-style: inherit;
        }
        a.item{
                font-size:18px;
                color:#5c5f66;
        }
        a{
                height:50px;
                width:188px;
        }

}


#fwz_country_chart{
    border-left-style: outset;
    border-left-color: #c9caca;
    border-left-width: 1px;

    border-bottom-style: double;
    border-bottom-color: #c9caca;
    border-bottom-width: 1px;

    margin-bottom:50px;

 }
</style>