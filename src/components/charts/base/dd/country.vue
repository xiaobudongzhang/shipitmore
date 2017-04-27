<template>
<div id="alltable">
<div id="dd_country_chart">
<mychart></mychart>
</div>

<div id="dd_country_table">
<mytable></mytable>
</div>

</div>
</template>
<script  type="text/ecmascript-6">
import mychart from './country_chart.vue'
import mytable from './country_table.vue'

export default {
    components:{
     mychart,
     mytable
    }


}
</script>

<style rel="stylesheet/less" lang="less">
#dd_country_chart {    
    border-left-style: outset;
    border-left-color: #c9caca;
    border-left-width: 1px;
    
    border-bottom-style: double;
    border-bottom-color: #c9caca;
    border-bottom-width: 1px;
 
    margin-bottom:50px;   

 }


</style>