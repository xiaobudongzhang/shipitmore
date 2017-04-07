<template>
<div class="ui small   menu grey ">
     
  <div class="left menu">
    <div class="ui dropdown item">
    	{{$store.state.module_fc.default.selectNow.name}}
	<i class="dropdown icon"></i> 
       <div class="menu">
       
        <a :class="(item.alias==$store.state.module_fc.default.selectNow.alias)?'item active selected':'item'" v-for="item in gys"  @click="selectType" :data-val=item.alias>{{item.name}}</a> 
      </div>
   </div>

    



    

    <div class="item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_fc.default.filter.searchVal placeholder="请输入需要查询的姓名">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="item">
        <div class="ui primary button"  @click="exportdata">导出</div>
    </div>

 </div>

 <div class="right menu">
  
      <div class="ui dropdown item">
        {{$store.state.module_fc.default.selectNowDate.name}}
        <i class="dropdown icon"></i>
       <div class="menu">

        	
        <a :class="(item.alias==$store.state.module_fc.default.selectNowDate.alias)?'item active selected':'item'" v-for="item in this.$store.state.module_fc.default.selectDate"  @click="selectTypeDate" :data-val=item.alias>{{item.name}}</a>

      </div>
   </div>


    <div class="ui dropdown item">
      	   <mydate firstType="Fc"></mydate>
      </div>
 </div>

</div>
</template>

<script type="text/ecmascript-6">
import mydate from "../common/date"


export default{
       
       data(){
       
	return {
	       gys_name:"供应商",
	       gys:this.$store.state.module_fc.default.select
	}
       },
       mounted() {

       },
       components:{
        mydate
       },
       methods:{
	  selectType(event){
	        var val=event.target.getAttribute('data-val')
		
		this.$store.state.module_fc.default.selectNow.alias=val
		this.$store.state.module_fc.default.selectNow.name=event.target.text
		
                
		this.$store.dispatch('updateFilterOfFc',{typeAlias:val})
                this.$store.dispatch('updateTableOfFc')

	  },
	  selectTypeDate(event){
                var val=event.target.getAttribute('data-val')

                this.$store.state.module_fc.default.selectNowDate.alias=val
                this.$store.state.module_fc.default.selectNowDate.name=event.target.text


                this.$store.dispatch('updateFilterOfFc', {dataType:val})
                this.$store.dispatch('updateTableOfFc')

          },

	  search(){
		
		var name=$("#searchname").val()
		if(name==""){
			return
		}
                this.$store.dispatch('updateFilterOfFc', {searchVal:name,mytype:'search'})
                this.$store.dispatch('updateTableOfFc')
	  },
	  exportdata(){
		exporttableme('分成');
		
		
	  }
       }

}
</script>