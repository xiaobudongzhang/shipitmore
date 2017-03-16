<template>
<div>
     <highcharts  :options="options" ref="highcharts">
     </highcharts>
</div>
</template>
<script  type="text/ecmascript-6">

export default {
     
       data(){
       
         return{
                 options:this.$store.state.module_fwz.default.chartList.wgzrs
         }
       }
}

</script>