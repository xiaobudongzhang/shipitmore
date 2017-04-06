<template>
<div>
    
    <div class="ui dropdown item">
    请选择省份 <i class="dropdown icon"></i>
     <div class="menu">
        <a class="item" @click="selectme" data-val="all" data-code="0">全国</a>
        <a  v-for="city in citys" class="item" @click="selectme" :data-val=city.pinyin :data-code=city.code>{{city.name}}</a>
      </div>
    </div>


    <div class="ui dropdown item">请选择城市 <i class="dropdown icon"></i> 
    <div class="menu">
        <a class="item" @click="selectme" data-val="all" data-code="0">全国</a>
        <a  v-for="city in citys" class="item" @click="selectme" :data-val=city.pinyin :data-code=city.code>{{city.name}}</a>
     </div>
    </div>

</div>
</template>

<script type="text/ecmascript-6">

export default{


       data(){
	 return {
		
		}
       },
        props: ['firstType'],
	mounted(){
	

	},
	methods:{
	
		
	
	}

}
</script>
<style rel="stylesheet/less" lang="less">
.datetimepicker {
	left:80% !important;
	top: 120px !important;	
}
</style>