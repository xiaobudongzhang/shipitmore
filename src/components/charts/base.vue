<template>
<div id="chart_base_vue">

<div class="container-fluid">
       <div class="left-wrapper col-sm-3 col-md-2 sidebar">
           <leftmenu :leftMenu="leftMenu" ></leftmenu>
        </div>

         <div class="col-sm-9  col-md-10  main">
                 <router-view></router-view>
         </div>
</div>



</div>
	
</template>

<script type="text/ecmascript-6">
  import leftmenu from 'components/page/common/leftmenu'


 export default {
    components: {
      leftmenu
    },
    data(){
      return {
        
        leftMenu: {}
      }
    }
 }
</script>