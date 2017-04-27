<template>
<div  class="homemain">

<myheader :menus="menus" ></myheader>
<router-view></router-view>

</div>
</template>

<script type="text/ecmascript-6">
import myheader from 'components/page/header/header'

export default {
    components: {
    	myheader     
    },
    data(){
      return {
      	  menus: {}   
      }
    },
    computed:{
     
    },
    created(){
     
    },
    methods: {
      
    },
    mounted(){

        //登录校验 最终在server端做
        if(this.$cookie.get('txy_name')==null||this.$cookie.get('txy_token')==null){
	
		this.$router.push('/login')
	}
   }

}
</script>

<style rel="stylesheet/less" lang="less">
  //@import "../../static/style/index";
  @import "../../../common/style/mixin";
  @dir: "static/imgs/login/";  

  .homemain{
	 margin-top:86px;
  }
  .apploginme {
  
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);

  }

</style>
