<template>
  <div v-show="loadingShow" class="loader-wrapper">
      <div class="loader">
        <!--<div class="loader-inner ball-scale-multiple">-->
          <!--<div></div>-->
          <!--<div></div>-->
          <!--<div></div>-->
        <!--</div>-->
        <div class="loading"></div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
      }
    },
    props:['loadingShow']
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common/style/mixin";
  @dir: "common/";
  @-webkit-keyframes ball-scale-multiple {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes ball-scale-multiple {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  .ball-scale-multiple {
    position: relative;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  .ball-scale-multiple > div:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  .ball-scale-multiple > div:nth-child(3) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .ball-scale-multiple > div {
    background-color: #34495c;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
    animation: ball-scale-multiple 1s 0s linear infinite;
  }
  .loader-wrapper{
    width:100%;
    .loader {
      display: flex;
      /*max-width: 25%;*/
      height: 100px;
      align-items: center;
      justify-content: center;
      .loading{
        @w: 56px;
        @h: 56px;

        width: @w;
        height: @h;
        .bg-img(@dir, 'loading.gif', @w, @h);
      }
    }
  }

</style>
