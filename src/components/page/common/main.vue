<template>
  <div class="main-wrapper" :class="{hideAll:hideAll}" @click.alt.prevent.stop="tohideAll"
       @click.meta.prevent.stop="pageSwitch">
    <mylist v-show="!is_add" :defTitle="defTitle"></mylist>
    <myedit v-show="is_add"></myedit>
    <i :class="fullClass" @click.prevent.stop="tohideAll()"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import mylist from 'components/common/list'
  import myedit from 'components/common/edit'
  import tool from 'src/util/Store';
  const RS_OK = 1
  export default{
    data(){
      return {
        path: '',
        hideAll: false,
        is_add: false
      }
    },
    methods: {
      tohideAll(){
        this.hideAll = !this.hideAll
      }, pageSwitch(){
        this.is_add = !this.is_add
      }
    },
    watch: {},
    computed: {
      fullClass(){
        return this.hideAll ? 'icon-outfull' : 'icon-fullscreen';
      }
    },
    components: {
      mylist,
      myedit
    },
    props: ['user', 'defTitle'],
    created(){
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common/style/mixin";

  @dir: "common/";

  .main-wrapper {
    .main-place();
    .icon-fullscreen,.icon-outfull {
      position: absolute;
      font-size: 24px;
      padding:0 0 8px 8px;
      top: 15px;
      right: 25px;
      display: block;
      color: rgba(0,0,0,0.6);
      cursor: pointer;
      &:hover{
        color: rgba(0,0,0,0.9);
      }
    }
  }
</style>
