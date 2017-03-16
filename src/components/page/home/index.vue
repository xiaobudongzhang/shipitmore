<template>
<div>
<myheader :menus="menus" :user="user"></myheader>

<div class="container-fluid">  

       <div class="left-wrapper col-sm-3 col-md-2 sidebar">
           <leftmenu :leftMenu="leftMenu" :user="user" :path="currentPath"></leftmenu>
        </div>

         <div class="col-sm-9  col-md-10  main">
                 <router-view></router-view>
         </div>

      
</div>

</div>
</template>

<script type="text/ecmascript-6">
  import myheader from 'components/page/header/header'
  import leftmenu from 'components/page/common/leftmenu'
  import login from 'components/page/login/login'

  const RS_OK = 1

  export default {
    components: {
      myheader,
      leftmenu
    },
    data(){
      return {
        menus: {},
        leftMenu: {},
        user: {},
        showRight: false,
        showVariable: false
      }
    },
    computed:{
      currentPath(){
        let path=this.$route.path
        return path
      }
    },
    created(){
      
    },
    methods: {
      
    },
    mounted(){

        //登录校验 最终在server端做
        if(this.$cookie.get('txy_name')==null||this.$cookie.get('txy_token')==null){
	console.log('tiaoz')
		this.$router.push('/login')
	}
   }

  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "../../static/style/index";
  
  .app-login {
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

</style>
