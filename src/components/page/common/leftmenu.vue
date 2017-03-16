<template>
<div v-if="menus" >

  <div class="ui   vertical menu inverted leftmenu"> 
  <a  :href=menu.link   :class=" menu.active ? 'item active ':'item ' "  v-for="menu in menus"
  >
    {{menu.name}}
   </a>
  </div>

</div>
</template>
<script type="text/ecmascript-6">
var leftMenues=require('components/data/leftMenu.json')

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
    }
  }
</script>
<style rel="stylesheet/less" lang="less">

.leftmenu .item{
	line-height:5 !important
}
  
</style>
