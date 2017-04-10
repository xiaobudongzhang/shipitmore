<template>
<div>
    
    <div class="ui dropdown item">
    {{$store.state[type].default.now.city}} <i class="dropdown icon"></i>
     <div class="menu">
         <a   class="item" @click="selectme"  data-code='-1'>请选择</a>
        <a  v-for="city in $store.state.default.citys_common" class="item" @click="selectme"  :data-code=city.code>{{city.name}}</a>
    </div>
    </div>

    

</div>
</template>

<script type="text/ecmascript-6">

export default{


       data(){
	 return {
		type:"module_"+(this.firstType.toLowerCase())
		}
       },
        props: ['firstType'],
	mounted(){
		        //登录校验 最终在server端做
        if(this.$cookie.get('txy_name')==null||this.$cookie.get('txy_token')==null){

                this.$router.push('/login')
        }
	

	},
	methods:{
	       

          selectme(event){
                var name=event.target.text;

                var code=event.target.getAttribute('data-code');
                this.$store.state[this.type].default.now.city=name;
                //更新图
                this.$store.dispatch('updateByRegionOf'+this.firstType, { code: code ,type:'city' ,name:name})
                this.$store.dispatch('updateTableOf'+this.firstType)
          }
		
	
	}

}
</script>
<style rel="stylesheet/less" lang="less">


</style>