<template>
<div v-if="menus" >

  <div class="ui   vertical menu inverted leftmenu"> 
    
  <a  :href=menu.link   :class=" menu.active ? 'item active ':'item ' "  v-for="menu in menus">
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

.leftmenu .item{
	line-height:5 !important
}
  
</style>
