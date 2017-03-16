<template>
<div>

<div id="dd_detail_table">
<mytable></mytable>
</div>

</div>
</template>
<script  type="text/ecmascript-6">

import mytable from './detail_table.vue'

export default {
    components:{

     mytable
    },
         mounted(){
              $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
      });
      $('.ui.menu a.item')
        .on('click', function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        });

        $('#datetimepicker').datetimepicker({
 language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
});
     }


}
</script>

<style rel="stylesheet/less" lang="less">
<style>
