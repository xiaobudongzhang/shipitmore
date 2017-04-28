<template>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container-fluid">
  

    <div class="navbar-header">
      <img :src="logo">统计后台
    </div>
    
    <div id="headernavbar" class="navbar-collapse collapse">
    
       
     <div class="ui dropdown item"> <img :src="touxiang"> <img :src="jiaotou">
     	<div class="menu">

             <a href="/!#/charts/dd/country/zdd" class="item">主菜单</a>
	     <a href="/!#/home/limit" class="item">账号管理</a>
	     <a  href="javascript:;" @click="logout" class="item">退出</a>
    	</div>
    </div>
    	 <!--<img :src="touxiang">
        <ul class="nav navbar-nav navbar-right" v-if="isLogin">
	<li><img :src="touxiang"></li>
	  <li v-if="userName=='root'"><a href="/!#/charts/dd/country/zdd" >主菜单</a></li>
          <li v-if="userName=='root'"><a href="/!#/home/limit" >账号管理</a></li>
	  <li><a href="javascript:;" >{{userName}}</a></li>
	  <li><a  href="javascript:;" @click="logout">退出</a></li>
	 
        </ul>
	-->
   </div>
  </div>
</nav>
</template>
<script type="text/ecmascript-6">
  import logo from 'components/static/imgs/home/logo.png'
  import touxiang from 'components/static/imgs/home/touxiang.png'
  import jiaotou  from 'components/static/imgs/home/jiaotou.png'
  import tool from 'src/util/Store';
  export default{
    data(){
      return {
        logo:logo,
	touxiang:touxiang,
	jiaotou:jiaotou
      }
    },
    methods: {
      logout(){

        this.$cookie.delete('txy_name')
	this.$cookie.delete('txy_token')
	this.$cookie.delete('cookieLogin')

	this.$router.push('/login')
	//window.location.reload();
	this.$store.dispatch('logout')	
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
.navbar-inverse{
    background-color:#f6f6f6;
    border-bottom-color:#c9caca;
    height:86px;
    margin-bottom:0;
    border-bottom-width:1px;
    
    .navbar-header{
	padding-left:30px;
	padding-top:18px;
	font-size:22px;
	color:#2c3e50;
	img{
	   padding-right:15px;
	}
    }

}
   
#headernavbar{
    float: right;
    padding-top: 18px;
    margin-right: 62px;
    .ui.dropdown.item {
         img{
		margin-left:3px;
	}	      
    }
}

</style>
