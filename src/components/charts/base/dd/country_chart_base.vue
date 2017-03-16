<template>
<div>
     <highcharts  :options="options" ref="highcharts">
     </highcharts>
</div>
</template>
<script  type="text/ecmascript-6">
let opt={};
export default {
     
       data(){
console.log(this.$route.params)       
         return{
                 options:opt
         }
       }
}

</script>