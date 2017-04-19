<template>
<div id="limit">

<div class="ui message" >
账号管理
</div>

<table class="ui celled table" id="tabledata">
       <caption id="tablecaption"></caption>
  <thead>
    <tr>

       <th v-for="tab in $store.state.limits.default.tabList">{{tab.name}}</th>

   </tr>
  </thead>
  <tbody>


    <tr v-for=" (arr,k) in $store.state.limits.default.tableList.zhList">
      
      <td >{{$store.state.limits.default.tableList.zhList[k].name}} </td>
      
      <td > <button class="ui secondary basic button" @click="guanli" :data-val=$store.state.limits.default.tableList.zhList[k].name    :data-useridval=arr.id>管理</button> </td>

      <td >

    <div class="ui grid">

      	<div class="four wide column " v-for="one in $store.state.limits.default.qxListObj[arr.id]">
         <button   class="ui button" >
          {{one.city_name}}
	   <!--<i class="remove icon right"  @click="removeCity" :data-userid=arr.id :data-arrid=one.id></i>-->
          </button>
        </div>

    </div>

   </td>
     
    </tr>


  </tbody>
  <tfoot>
    <tr>
    <th colspan="3">
            

    </th>
  </tr></tfoot>
</table>

           



<!--弹出层-->
<div class="ui modal">
     
    

  <div class="header">
   {{nowUser}}的城市管理
  
<div class="rightme">
<div class="ui checkbox  rightmex" >     
         <input type="checkbox"   @click="checkall" :checked=selectAll>
            <label>全部城市</label>
</div>

<div class="ui button" @click="closeme">
   关闭
</div>

</div>
  </div>

  <div class="content">


  <div class="ui grid">


       
      <div class="four wide column" v-for="city in $store.state.limits.default.citys_merge">
	    
	    <div class="ui checkbox" >
            	 <input type="checkbox" :data-citycode=city.code :data-cityname=city.name  @click="checkme" 
		 	:checked=$store.state.limits.default.qxListObj[nowUserId]&&$store.state.limits.default.qxListObj[nowUserId][city.code] >
           	 <label>{{city.name}}</label>
           </div>
	   

       </div>

       

     <div class="four wide column" v-for="city in $store.state.limits.default.citys_merge">

            <div class="ui checkbox" >
                 <input type="checkbox" :data-citycode=city.code :data-cityname=city.name  @click="checkme"
                        :checked=$store.state.limits.default.qxListObj[nowUserId]&&$store.state.limits.default.qxListObj[nowUserId][city.code] >
                 <label>{{city.name}}</label>
           </div>


       </div>




            <div class="four wide column" v-for="city in $store.state.limits.default.citys_merge">

            <div class="ui checkbox" >
                 <input type="checkbox" :data-citycode=city.code :data-cityname=city.name  @click="checkme"
                        :checked=$store.state.limits.default.qxListObj[nowUserId]&&$store.state.limits.default.qxListObj[nowUserId][city.code] >
                 <label>{{city.name}}</label>
           </div>


       </div>




            <div class="four wide column" v-for="city in $store.state.limits.default.citys_merge">

            <div class="ui checkbox" >
                 <input type="checkbox" :data-citycode=city.code :data-cityname=city.name  @click="checkme"
                        :checked=$store.state.limits.default.qxListObj[nowUserId]&&$store.state.limits.default.qxListObj[nowUserId][city.code] >
                 <label>{{city.name}}</label>
           </div>


       </div>






  </div>


  </div>

</div>
  



</div>
</template>

<script type="text/ecmascript-6">


  export default {
    components: {
    },
    data(){
      return {
        nowUser:'',
	nowUserId:0,
	selectAll:false
      }
    },
    computed:{
      
    },
    created(){
	
    },
    methods: {
      	removeCity(env){
	
		var id=env.target.getAttribute('data-arrid')
		var userId=env.target.getAttribute('data-userid')
		this.$store.dispatch('removeUserCity',{id:id,userId:userId})
	},
	guanli(env){
		var user=env.target.getAttribute('data-val')
		var userId=env.target.getAttribute('data-useridval')
		this.nowUser=user
		this.nowUserId=userId
	        $('.ui.modal').modal('show')
		
		if(this.$store.state.limits.default.qxListObj[this.nowUserId]){
			if(Object.keys(this.$store.state.limits.default.qxListObj[this.nowUserId]).length==this.$store.state.limits.default.citys_merge.length){
				this.selectAll=true
			}else{
				this.selectAll=false
			}
		}
		

		this.$store.dispatch('updateUserCitysListDataByUserId',{userId:this.nowUserId})

	},
	closeme(){
	
		$('.ui.modal').modal('hide')
	},
	checkme(env){
		var cityCode=env.target.getAttribute('data-citycode')
		var cityName=env.target.getAttribute('data-cityname')
		var that=this

		this.$store.dispatch('updateUserCity',{userId:this.nowUserId,cityCode:cityCode,cityName:cityName}).then(()=>{

		
                if(that.$store.state.limits.default.qxListObj[this.nowUserId]){
                        if(Object.keys(that.$store.state.limits.default.qxListObj[this.nowUserId]).length==that.$store.state.limits.default.citys_merge.length){
                                that.selectAll=true
                        }else{
                                that.selectAll=false
                        }
			
                }
		this.$store.dispatch('updateUserCityAllOne',{userId:this.nowUserId,status:that.selectAll});
		
		
});
		
		

	},
	checkall(env){
		var checked=env.target.checked;
		this.selectAll=checked

		this.$store.dispatch('updateUserCityAll',{userId:this.nowUserId,checked:checked})	
	
	
	}
			
      
    },
    mounted(){

    
	
	var that = this
	 this.$store.dispatch('initUserList').then((dataList)=>{
		that.$store.dispatch('initUserCitysList',{userLists:dataList})
	 	
	 });
	 
	 


	 
   }

  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "../../static/style/index";
  
  #limit {
    margin-left:20px;
  }
  input[type="checkbox"]
  {
	   margin-left:0px !important 
  }
  .rightme{
	float:right 
  }
  .rightmex{
	margin-right:10px
  }
  .xyz{
	
	margin-right:8px !important
  }
  .ui.modal{
	overflow:auto !important
	
	
  }
</style>
