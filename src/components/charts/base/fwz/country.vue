<template>
<div id="alltable">


<mychart></mychart>

<div id="fwz_country_table">
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


<style>