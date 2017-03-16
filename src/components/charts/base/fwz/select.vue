<template>
<div class="ui small   menu grey ">
  <div class="left menu">



    <div class="ui dropdown item">{{region_name}} <i class="dropdown icon"></i> <div class="menu">
        <a class="item" @click="selectme" data-val="all">全国</a>
        <a  v-for="city in citys" class="item" @click="selectme" :data-val=city.pinyin>{{city.name}}</a>


      </div>
    </div>

    

    
    <div class="ui dropdown item">{{fws_name}} <i class="dropdown icon"></i> <div class="menu">
        <a class="item" @click="selectFws">服务商姓名</a>
        <a class="item" v-for="item in fws"  @click="selectFws" >{{item.name}}</a>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">




    <mydate firstType="Fwz"></mydate>    

  

  </div>



</div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import mydate from "../common/date"
export default{
       data(){
	return {
	       region_name:"全国",
	       fws_name:'服务商姓名',
	       citys:this.$store.state.default.citys,
	       fws:this.$store.state.default.fws
	}
	
       },
       mounted(){
	
	//init
        this.$store.dispatch('updateByRegionOfFwz')
       },
       methods:{
	  selectme(event){
		var name=event.target.text;
		var pinyin=event.target.getAttribute('data-val');
		this.$data.region_name=name;
		//更新图
		this.$store.dispatch('updateByRegionOfFwz', { pinyin: pinyin })
		this.$store.dispatch('updateTableOfFwz')
	  },
	  selectFws(event){
		this.$data.fws_name=event.target.text;
		this.$store.dispatch('updateByFwsOfFwz', {fwsName:event.target.text})
		this.$store.dispatch('updateTableOfFwz')

	  },
	  startTime(){
        
          },
          endTime(){

          },
	            exportdata(){
                exporttableme('服务者');


          }


       },
       components:{
	mydate
       }
       

}



</script>