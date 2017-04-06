<template>
<div class="ui small   menu grey ">
  <div class="left menu">

       
       <!--<myregion fisrtType="dd"></myregion>-->

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

    
      <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_dd.default.filter.fwsName placeholder="服务商姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">
    <mydate firstType="Dd"></mydate>    
  </div>

</div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import mydate from "../common/date"
import myregion from "../common/region"

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
       // this.$store.dispatch('updateByRegionOfDd')
       },
       methods:{
	selectProvinces(event){
		var name=event.target.text;
		this.$store.state.module_dd.default.now.province=name;
		var code=event.target.getAttribute('data-code');
		
		this.$store.dispatch('updateByRegionOfDd', { code:code,type:'province' })
                this.$store.dispatch('updateTableOfDd')
		
	
	},
       
	  selectme(event){
		var name=event.target.text;
		
		var code=event.target.getAttribute('code-val');
		this.$store.state.module_dd.default.now.city=name;
		//更新图
		this.$store.dispatch('updateByRegionOfDd', { code: code ,type:'city' })
		this.$store.dispatch('updateTableOfDd')
	  },
	  
	  startTime(){
        
          },
          endTime(){

          },
	  exportdata(){
            exporttableme('订单');
          },
	  search(){

                var name=$("#searchname").val()
                if(name==""){
                        //return
                }
                this.$store.dispatch('updateFilterOfDd', {fwsName:name})
		this.$store.dispatch('updateChart')
                this.$store.dispatch('updateTableOfDd')
          }
	  
       },
       components:{
		mydate,
		myregion
       }

}
</script>
