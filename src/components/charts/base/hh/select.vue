<template>
<div class="ui small   menu grey ">
  <div class="left menu">



    <div class="ui dropdown item">{{$store.state.module_hh.default.selectNow.name}} <i class="dropdown icon"></i> <div class="menu">
        <a class="item" @click="selectme" data-val="all">全国</a>
        <a  v-for="city in citys" class="item" @click="selectme" :data-val=city.pinyin>{{city.name}}</a>


      </div>
    </div>

    

     <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_hh.default.filter.fwzName placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>

    


    <div class="item">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>
    



  </div>

  <div class="right menu">




    <mydate firstType="Hh"></mydate>    

  

  </div>



</div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import mydate from "../common/date"
export default{
       data(){
	return {
	      
	       citys:this.$store.state.default.citys,
	      
	}
	
       },
       mounted(){
	
	//init
        
       },
       methods:{
	  selectme(event){
		var name=event.target.text;
		var pinyin=event.target.getAttribute('data-val');
		
		this.$store.state.module_hh.default.selectNow.pinyin=pinyin
                this.$store.state.module_hh.default.selectNow.name=name

                if(pinyin=='all'){
                        name=""
                }

		
		//更新图
		this.$store.dispatch('updateFilterOfHh',{cityName:name});
		this.$store.dispatch('updateTableOfHh')
	  },
	  search(){

                var name=$("#searchname").val()
                if(name==""){
                        return
                }
                this.$store.dispatch('updateFilterOfHh', {fwzName:name})
                this.$store.dispatch('updateTableOfHh')
          },
	  exportdata(){
                exporttableme('会话');


          }


       },
       components:{
	mydate
       }
       

}



</script>