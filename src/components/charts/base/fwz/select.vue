<template>
<div class="ui small   menu grey ">
  <div class="left menu">



       <div class="ui dropdown item">
     {{$store.state.module_dd.default.now.province}} <i class="dropdown icon"></i>
     <div class="menu">
             <a   class="item" @click="selectProvinces"  data-code=''>请选择</a>

        <a  v-for="city in $store.state.default.provinces" class="item" @click="selectProvinces"  :data-code=city.code>{{city.name}}</a>
      </div>
    </div>


    <div class="ui dropdown item">{{$store.state.module_dd.default.now.city}} <i class="dropdown icon"></i>
    <div class="menu">
        <a   class="item" @click="selectme"  data-code=''>请选择</a>
        <a  v-for="city in $store.state.module_dd.default.citys" class="item" @click="selectme"  :data-code=city.code>{{city.name}}</a>
     </div>
    </div>


    

    
    <!--<div class="ui dropdown item">{{fws_name}} <i class="dropdown icon"></i> <div class="menu">
        <a class="item" @click="selectFws">服务商姓名</a>
        <a class="item" v-for="item in fws"  @click="selectFws" >{{item.name}}</a>
      </div>
    </div>-->


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    
  </div>

  <div class="right menu">
      <div class="ui dropdown item">
           <mydate firstType="Fwz"></mydate>
      </div>
 </div>
 

</div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import mydate from "../common/date"
export default{
       data(){
	return {
	               province_name:"请选择",
               city_name:"请选择",

	       region_name:"全国",
	       fws_name:'服务商姓名',
	       citys:this.$store.state.default.citys,
	       fws:this.$store.state.default.fws
	}
	
       },
       mounted(){
	
	//init
//        this.$store.dispatch('updateByRegionOfFwz')
       },
       methods:{
               selectProvinces(event){
                var name=event.target.text;
                this.$store.state.module_dd.default.now.province=name;
                var code=event.target.getAttribute('data-code');

                this.$store.dispatch('updateByRegionOfFwz', { code:code,type:'province' })
                this.$store.dispatch('updateTableOfFwz')


        },
	  selectme(event){
		var name=event.target.text;
		var pinyin=event.target.getAttribute('data-val');
		this.$store.state.module_dd.default.now.city=name;
		var code =event.target.getAttribute('data-code');
		//更新图
		this.$store.dispatch('updateByRegionOfFwz', { code: code ,type:'city' })
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