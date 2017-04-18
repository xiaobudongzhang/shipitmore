<template>
  <div class="login-wrapper" >
    <form action="" role="form" @submit.prevent="onSubmit">
      <legend>用户登录</legend>

      <div class="form-group">
        <label for="username">用户名</label>
        <input  type="text" v-model="user.name" class="form-control" name="username" id="username" placeholder="请输入用户名"  @focus="myfocus">
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" class="form-control" v-model="user.passWd" name="password" id="password" placeholder="请输入密码" @focus="myfocus">
      </div>
      <div class="form-group result " :class="result_type" >
        {{result}}
      </div>


      <button type="submit" class="btn btn-primary">登 录</button>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  //  import detail from 'components/header/detail'
  import tool from 'src/util/Store';
  
  const RS_OK='00000'
  export default{
    data(){
      return {
        cmap: [],
        user: {},
        result: '',
        result_type: 'rs_error',
       
      }
    },
    methods: {
    

     myfocus(){
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
            setTimeout(()=>{
              
		//window.location.href="/!#/charts/dd/country/zdd"
		
              this.$router.push('/charts/dd/country/zdd')
            window.location.reload();
	    },300)

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

  @dir: "header/";
   

  .login-wrapper {
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);

    form {
      width:100%;
      margin:0 auto;
      legend {

      }
      .form-group {
        &.result{

        }
        &.rs_ok{
          color: green;
        }
        &.rs_error{
          color: rgb(240,20,20);
        }
      }
    }
  }
</style>
