<template>
<div class="ui small   menu grey ">
  <div class="left menu">



    <div class="ui dropdown item">
    {{province_name}} <i class="dropdown icon"></i>
     <div class="menu">
             <a   class="item" @click="selectProvinces"  data-code=''>请选择</a>

        <a  v-for="city in $store.state.default.provinces" class="item" @click="selectProvinces"  :data-code=city.code>{{city.name}}</a>
      </div>
    </div>


    <div class="ui dropdown item">{{city_name}} <i class="dropdown icon"></i>
    <div class="menu">
        <a   class="item" @click="selectme"  data-code=''>请选择</a>
        <a  v-for="city in $store.state.module_dd.default.citys" class="item" @click="selectme"  :data-code=city.code>{{city.name}}</a>
     </div>
    </div>

    

    
    <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_ds.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button"  @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">




    <mydate firstType="Ds"></mydate>    

  

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

	       citys:this.$store.state.default.citys,
	       
	}
	
       },
       mounted(){
	
	//init
        
       },
       methods:{
	        selectProvinces(event){
                var name=event.target.text;
                this.$data.province_name=name;
                var code=event.target.getAttribute('data-code');

                this.$store.dispatch('updateByRegionOfDs', { code:code,type:'province' })
                this.$store.dispatch('updateTableOfDs')


        },
	  selectme(event){
		var name=event.target.text;
		var pinyin=event.target.getAttribute('data-val');
		
		this.$store.state.module_ds.default.selectNow.pinyin=pinyin
                this.$store.state.module_ds.default.selectNow.name=name
		
		if(pinyin=='all'){
			name=""
		}
		//更新图
		this.$store.dispatch('updateFilterOfDs',{cityName:name});
		this.$store.dispatch('updateTableOfDs')
	  },
         search(){

                var name=$("#searchname").val()
                if(name==""){
                        return
                }
                this.$store.dispatch('updateFilterOfDs', {fwzName:name})
                this.$store.dispatch('updateTableOfDs')
          },
	  startTime(){
        
           },
           endTime(){

                },
	exportdata(){
                exporttableme('打赏');


          }


       },
       components:{
	mydate
       }
       

}



</script>