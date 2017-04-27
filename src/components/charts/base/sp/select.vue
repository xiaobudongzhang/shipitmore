<template>
<div class="myselect">
<div class ="mysecond ui  column grid ">

     <div class="myregion ">
     	  <myregion firstType="Sp" class="item"></myregion>

     </div>

     <div class="mysptype" >
       
       <div class="ui dropdown item">
        {{$store.state.module_sp.default.selectNow.name}}
        <i class="dropdown icon"></i>
       <div class="menu">

        <a :class="(item.alias==$store.state.module_sp.default.selectNow.alias)?'item active selected':'item'" 
            v-for="item in this.$store.state.module_sp.default.select" 
	     @click="selectType" :data-val=item.alias>{{item.name}}</a>
      </div>
      </div>
     </div>


      <div class="mysearch " >
      <div class="ui transparent icon input">
        <input class="prompt" type="text" id="searchname" :value=$store.state.module_sp.default.filter.searchVal placeholder="请输入查询">
        <i class="search big link icon"  @click="search"></i>
      </div>
    </div>


    <div class="myexport">
        <div class="ui primary button" @click="exportdata">导出</div>
    </div>



    <div class="mydate ">
    	 <mydate    firstType="Sp"></mydate>
    </div>

</div>
</div>
</template>

<script type="text/ecmascript-6">
import mydate from "../common/date"
import myregion from "../common/region_common"


export default{
       
       data(){
       
	return {
	                   province_name:"请选择",
               city_name:"请选择",

	       region_name:"全国",
	       gys_name:"供应商",
	       gys:this.$store.state.module_sp.default.select,
	       citys:this.$store.state.default.citys
	}
       },
       mounted() {

       },
       components:{
        mydate,
	myregion
       },
       methods:{
         selectProvinces(event){
                var name=event.target.text;
                this.$data.province_name=name;
                var code=event.target.getAttribute('data-code');

                this.$store.dispatch('updateByRegionOfSp', { code:code,type:'province' })
                this.$store.dispatch('updateTableOfSp')


        },
	 selectme(event){
                var name=event.target.text;

                var code=event.target.getAttribute('code-val');
                this.$data.city_name=name;
                //更新图
                this.$store.dispatch('updateByRegionOfSp', { code: code ,type:'city' })
                this.$store.dispatch('updateTableOfSp')
          },

	  selectType(event){
	        var val=event.target.getAttribute('data-val')
		
		this.$store.state.module_sp.default.selectNow.alias=val
		this.$store.state.module_sp.default.selectNow.name=event.target.text
		
               
		this.$store.dispatch('updateFilterOfSp', {typeAlias:val})
                

	  },
	  search(){
		//console.log(this.$store.state.module_sp.default.page.total,3432)	
	
		var name=$("#searchname").val()
		if(name==""){
			//return
		}
                this.$store.dispatch('updateFilterOfSp', {searchVal:name})
                this.$store.dispatch('updateTableOfSp')
	  },
	  exportdata(){
		//exporttableme('商品');
		 this.$store.dispatch('download',{type:'sp',name:'商品'})
		
	  },
	  selectme(event){
                var name=event.target.text;
                var pinyin=event.target.getAttribute('data-val');
                this.$data.region_name=name;
                var code =event.target.getAttribute('data-code');
                //更新图
                this.$store.dispatch('updateByRegionOfSp', { pinyin: pinyin,cityCode:code })
                this.$store.dispatch('updateTableOfSp')
          },
       }

}
</script>
<style rel="stylesheet/less" lang="less">
        .mysptype{
                line-height:40px;
                border-style: solid;
                border-color: #dadadd;
                border-width: 1px;
        }
</style>