<template>
  <div v-show="titleShow" class="title-wrapper">
    <slot></slot>
    <div class="search">
      <div class="date">
        <datepicker title="创建时间" :map="map"></datepicker>
      </div>

    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import datepicker from 'components/common/datepicker'
  export default{
    data(){
      return {
        titleShow: true,
        map: {}
      }
    },
    components: {
      datepicker
    },
    props: ['loadingShow']
  }
</script>
<style rel="stylesheet/less" lang="less">

  @dir: "common/";

  .title-wrapper {
    position: relative;
    .search {

    }

  }
</style>
