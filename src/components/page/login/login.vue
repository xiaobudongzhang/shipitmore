<template>
<div class="login-all">

  <div class="login-wrapper" >
  <div class="login-small-img">
   <div class="login-small-img-in">
  土著游统计后台系统
   </div>
  </div>
    <form action="" role="form" @submit.prevent="onSubmit">
    
      <div class="form-group loginme" ><img :src="loginurl">登录</div>

      <div class="form-group one">
        <!--<label for="username">用户名</label>-->
	
        <input  type="text" v-model="user.name" class="form-control" name="username" id="username" placeholder="请输入账号"  @focus="myfocus">
	
       </input>

      </div>

      <div class="form-group two">
        <!--<label for="password">密码</label>-->
	
        <input type="password" class="form-control" v-model="user.passWd" name="password" id="password" placeholder="请输入密码" @focus="myfocus">
      </div>
      <div class="form-group result" :class="result_type" >
        <img :src="loginerr">{{result}}
      </div>


      

      <div class="form-group" id="autologin" >

      <div class="ui checkbox" >
        <input type="checkbox" name="autologin">
         <label>下次自动登录</label>
     </div>

     </div>
     
     
     <div class="form-group loginbutton" >
     <button type="submit" class="btn btn-primary">登 录</button>
     </div>

    </form>
  </div>

</div>
</template>
<script type="text/ecmascript-6">
  //  import detail from 'components/header/detail'
  import tool from 'src/util/Store';
  import loginurl from 'components/static/imgs/login/login.png'  
  import userurl from 'components/static/imgs/login/user.png'
  import passwdurl from 'components/static/imgs/login/passwd.png'
  import loginerr from 'components/static/imgs/login/error.png'

  const RS_OK='00000'
  export default{
    data(){
      return {
        cmap: [],
        user: {},
        result: '',
        result_type: 'rs_error',
        loginurl:loginurl,
	userurl:userurl,
	passwdurl:passwdurl,
	loginerr:loginerr
      }
    },
    methods: {
    

     myfocus(){
        console.log('focus')
	this.result=''	
      },
      onSubmit(){
        this.user.isLogin=true
   
	
        let url = this.$store.state.default.reqUrl+'/api/user/login'
        
        this.user.is_vue = 1;
	
        this.$http.post(url,this.user).then((rs) => {
          let obj = rs.data
	  
          if (obj.code == RS_OK) {
            this.result_type = 'rs_ok';
            this.result = '登录成功!';
            //setTimeout(()=>{
              
		//window.location.href="/!#/charts/dd/country/zdd"
		
              this.$router.push('/charts/dd/country/zdd')
              window.location.reload();
	    //},300)

          }else{
            this.result = obj.msg?obj.msg:"登录失败，用户名或密码错误";
          }
        })

      }
    },
    components: {},
    props: [],
    created(){
      this.cmap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../../common/style/mixin";
  @dir: "static/imgs/login/";
   
::-webkit-input-placeholder {
  color:#aaaaaa !important;
  font-size:14px;
}
::-moz-placeholder {
  color:#aaaaaa !important;
  font-size:14px;
}
:-ms-input-placeholder {
  color:#aaaaaa !important;
  font-size:14px;

}

  .btn-primary{
	width:100%;
	height:56px;
  }

   #username{
       @w: 24px;
       @h: 24px;
       .bg-img(@dir, 'user.png', @w, @h);
       
       background-position: 2px center;
       padding-left: 27px;
   }
   
   #password{
       @w: 24px;
       @h: 24px;
       .bg-img(@dir, 'passwd.png', @w, @h);
   
       background-position: 2px center;
       padding-left: 27px;
   
   }

   #autologin{
     padding-bottom:62px;   
   }

   #autologin label{
   	   font-size:14px;
	   color:#34495e;	
   }   

   
   .login-all {
      
       position: fixed;
       top:0px;
       width: 100%;
       height:100%;
       @w: 100%;
       @h: 100%;
       .bg-img(@dir, 'bg_big.png', @w, @h);
      
   }


  .login-wrapper {
  		 
    position: fixed;
    width: 600px;
    //height:640px;
    top: 132px;
    left: 660px;
    //transform: translate(-50%, -70%);

    .login-small-img{
     
       width:100%;
       height:192px;
       @w: 100%;
       @h: 100%;
       .bg-img(@dir, 'bg_small.png', @w, @h);
       
        .login-small-img-in{
		    font-size: 28px;
    		    text-align: center;
     		    color: white;
		    line-height:192px;
		
	}
    }
    
          

    form {
      width:100%;
      background-color: white;
      margin:0 auto;
      padding-left:70px;
      padding-right:70px;
      input{
	height:56px;
	
      }
      
      

     .loginme {
      	     padding-top:30px;
	     padding-bottom:24px;
	     font-size:24px;
	     color:#34495e;
	      margin:0 auto;
      }
      
      .form-group {
       &.one{
      	padding-bottom:24px;
	 margin:0 auto;
       }
       
       &.two{
	margin:0 auto;
       }
       
	margin:0 auto;
        &.result{

        }
        &.rs_ok{
          color: green;
        }
        &.rs_error{
	 padding-top:10px;
	  height:30px;
          color: rgb(240,20,20);
        }
	
	&.loginbutton{
		padding-bottom:78px;
	}
      }
    }
  }
</style>
