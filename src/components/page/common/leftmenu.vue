<template>
<div v-if="menus" >

  <div class="ui   vertical menu inverted leftmenu"> 
  
  <!--<div :class=" menu.active ? 'item active ':'item' "  v-for="menu in menus">-->
  <a  :href=menu.link    :class=" menu.active ? 'item active ':'item' "  v-for="menu in menus">
    {{menu.name}}
  </a>
  


  </div>

</div>
</template>
<script type="text/ecmascript-6">

export default{
   data(){
      return {
        detailShow: false
      }
    },
    methods: {
      logout(){
        
      },
      
      
    },
    computed: {
      menus(){
	var leftMenues=this.$store.state.default.leftMenus;
	
	return leftMenues.map(function(v){
		if(v.link=="/!"+location.hash){
			v.active=1
		}
		return v
		
	})
	
      }
    },
    components: {},
    props: ['leftMenu', 'user', 'path'],
    created(){
	//this.$store.dispatch('getLeftMenuLimit',{currentModule:'root'});
    }
  }
</script>
<style rel="stylesheet/less" lang="less">

.leftmenu {
	 //color:red;
	  
	.active.item{
	  background:#2c3f50 !important;
	}
	.item{
		height:60px;
		padding:0 !important;
		text-align: center;
		line-height: 60px !important;
		font-size:16px;
		color:#bfc6ce !important;
	        //padding-left:90px !important;
	
	}
}
  
</style>
