File Edit Options Buffers Tools Help
<template>
<div>

<div class="ui  pointing menu">
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
     
     }
}
</script>