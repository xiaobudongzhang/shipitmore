<template>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="javascript:;">统计后台</a>
    </div>

    <div id="navbar" class="navbar-collapse collapse">
        
        <ul class="nav navbar-nav navbar-right" v-if="isLogin">
          <li><a href="javascript:;" >{{userName}}</a></li>
	  <li><a  href="javascript:;" @click="logout">退出</a></li>
        </ul>
   </div>
  </div>
</nav>
</template>
<script type="text/ecmascript-6">
  import tool from 'src/util/Store';
  export default{
    data(){
      return {
        
      }
    },
    methods: {
      logout(){

        this.$cookie.delete('txy_name',{domain: this.$store.state.default.cookieDomain})
	this.$cookie.delete('txy_token',{domain: this.$store.state.default.cookieDomain})
	this.$router.push('/login')
      }
    },
    computed: {
      isLogin:function(){
	return this.$cookie.get('txy_name')&&this.$cookie.get('txy_token')
      },
      userName:function(){
	return  this.$cookie.get('txy_name')
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

</style>
