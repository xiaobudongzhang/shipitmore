<template>
  
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    
<div class="container-fluid">
      
 <div class="navbar-header">
           <a class="navbar-brand" href="#">统计后台</a>
 </div>

 <div id="navbar" class="navbar-collapse collapse">


        <!--<ul class="nav navbar-nav">
          <li v-for="menu in menus">
            <router-link :class="{current:menu.link==path}" :to="{path:menu.link,query:{ctl:menu.ctl}}">{{menu.name}}
            </router-link>
          </li>
        </ul>-->

        <ul class="nav navbar-nav navbar-right" v-if="user.isLogin">
          <li  class="uinfo2">
            <!--<i class="icon-photo22">-->
	    <a href="#" >{{user.username}}</a>
	      
	    <!--</i>-->
            
          </li>
	  <li><a  href="#" @click="logout">
	  退出
	  </a></li>
       <!   <li class="login22">
            <a v-if="!user.isLogin">登录</a>
            <i class="icon-exit22" v-else @click="logout"></i>
          </li>-->
        </ul>

   </div>

</div>
    </nav>
  

</template>
<script type="text/ecmascript-6">
  //  import detail from 'components/header/detail'
  import tool from 'src/util/Store';
  export default{
    data(){
      return {
        cmap: [],
        path: '',
        detailShow: false
      }
    },
    methods: {
      logout(){
        this.$parent.user = {}
        tool.lsave('user_info', '{}')
      }
    },
    computed: {
      isCurrent(){

      }
    },
    components: {},
    props: ['menus', 'user'],
    created(){
      this.cmap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      this.path = this.$route.path
    }
  }
</script>
<style rel="stylesheet/less" lang="less">

  //@dir: "header/";
  /*.icon-com {
    line-height: 50px;
    font-size: 20px;
    display: block;
    color: rgba(0, 0, 0, 0.6);
    &:hover{
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  
    .navbar-header {
      width: 200px;
      text-align: left;
      display: block;
      border-radius: 3px;
      
      &:hover {
      
      }
      
      .aicon-yundijie {
        margin-left: 30px;
        font-size: 70px;
        line-height: 50px;
        display: inline-block;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .nav {
      li {
        a.router-link-active {
          font-size: 18px;
          font-weight: 700;
          
          border-bottom: 5px solid rgba(0, 0, 0, 0.7);
          box-sizing: border-box;
        }
      }
    }
    .uinfo {
        position: relative;
        .icon-photo {
          position: absolute;
          top: 0;
          left: -20px;
          .icon-com();
        }
      span{
        line-height:50px;
        font-size:20px;
        display: block;
        margin:0 10px;
      }
      padding-right:20px;
    }
    .login {
      .icon-exit {
        .icon-com();
        font-size: 26px;
        cursor: pointer;
        margin:0 20px;
      }
      a {
        cursor: pointer;
      }
    }
  }*/
</style>
