<template>
<div id="app" @click.alt="toHide">

<div v-if="!user.isLogin" class="app-login">
      <login></login>
</div>
<div v-else>
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

</div>
</template>

<script type="text/ecmascript-6">
  import myheader from 'components/header/header'
  import leftmenu from 'components/common/leftmenu'
  import login from 'components/login/login'
  import tool from './util/Store';
  var leftMenues=require('./components/data/leftMenu.json')
  
  const RS_OK = 1


  function cl(msg) {
    console.log(msg)
  }

  export default {
    name: 'app',
    components: {
      myheader,
      login,
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
      this.getMenus();
      this.getleftMenu();
//      cl(tool)
//      tool.lsave('user','aaron1990')
//      let rs=tool.lfetch('user')
      this.user=tool.lfetch('user_info')
//      cl(rs)

//      Store.save({user:'aaron'})
//      let rs=Store.fetch()
//      cl(rs)
    },
    methods: {
      toHide(){
//        cl('in toHide1');
      },
      getMenus(){
        //let url = '/api/menu'
        //this.$http.get(url).then((rs) => {
          //let obj = rs.data
          //if (obj.status == RS_OK) {
            this.menus = []//obj.data
          //}
      //  })
      },
       getleftMenu(){
       //console.log(leftMenus)
        //let url = '/api/leftMenu'
        //this.$http.get(url).then((rs) => {
          //let obj = rs.data
          //if (obj.status == RS_OK) {
            this.leftMenu = leftMenues//obj.data
          //}
        //})
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "common/style/index";
  #app{
        margin-top:60px;
  }
  .app-login {
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

</style>
