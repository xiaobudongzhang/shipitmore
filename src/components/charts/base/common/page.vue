<template>
<div class="ui right floated pagination menu">
        
	<a class="icon item" @click="prePage" v-if="preP">
          <i class="left chevron icon"></i>
        </a>

        <a :class="item==currentPage?'item active':'item'" @click="page" v-for="item in $store.state[type].default.page.pages" :data-val=item>{{item}}</a>


        <a class="icon item" @click="nextPag" v-if="$store.state[type].default.page.nextP">
          <i class="right chevron icon"></i>
        </a>

        <div class="item">
                 <div class="ui right labeled input">
                 <input type="text" :placeholder=$store.state[type].default.page.placeholder id="pageGoto">
                 <a class="ui label" @click="goto">跳转</a>
                </div>
        </div>

</div>
</template>

<script type="text/ecmascript-6">
export default{
   data(){
	
	
	var obj=this.$store.state["module_"+this.firstType.toLowerCase()].default
	return {
	       
	       currentPage:obj.filter.page,
	       pageListNum:obj.page.pageListNum,
	       preP:       obj.page.preP,
	       type:"module_"+this.firstType.toLowerCase()
	       
	}
   },
   computed:{
	
   },
   mounted(){
	        //登录校验 最终在server端做
        if(this.$cookie.get('txy_name')==null||this.$cookie.get('txy_token')==null){

                this.$router.push('/login')
        }

   },
   methods:{
	page(env){	
                var page=env.target.getAttribute('data-val')
                this.$data.currentPage=page
                this.$store.dispatch('updateTableOf'+this.firstType,{page:page})
        },
        prePage(){
		this.$store.state[this.type].default.page.nextP=true
                this.$store.state[this.type].default.page.totalPageNowNum--;
		
		
		if(this.$store.state[this.type].default.page.totalPageNowNum<2){
			this.$data.preP=false
		}
		var newPage=[]

                var that=this
                
		var totalNum=(this.$store.state[this.type].default.page.totalPageNowNum-1)*this.$data.pageListNum	
		
		for(var i=1;i<=this.$data.pageListNum;i++){
			newPage.push(totalNum+i)
		}

                var page=newPage[0]

                this.$data.currentPage=page

                this.$store.dispatch('updateTableOf'+this.firstType,{page:page})

                this.$store.state[this.type].default.page.pages=newPage
        },
        nextPag(){
		this.$data.preP=true
                this.$store.state[this.type].default.page.totalPageNowNum++

 	this.$store.state[this.type].default.page.nextP=true	

		var newPage=[]
		var that=this
		
                that.$store.state[this.type].default.page.pages.forEach(function(val,key,array){
			
			if((val+that.$data.pageListNum)>that.$store.state[that.type].default.page.totalPage){
				that.$store.state[that.type].default.page.nextP=false
			}else{
				 newPage.push(val+that.$data.pageListNum)
			}
                        
                });
		
                var page=newPage[0]


                this.$data.currentPage=page

                this.$store.dispatch('updateTableOf'+this.firstType,{page:page})

                this.$store.state[this.type].default.page.pages=newPage
        },
	goto(){
                var page=$("#pageGoto").val();
		
		if(page>this.$store.state[this.type].default.page.totalPage){
			console.log('大于最大页了！')
			return;
		}
		this.$data.preP=true
		this.$store.state[this.type].default.page.nextP=true

		if(page<=this.$store.state[this.type].default.page.pageListNum){
			this.$data.preP=false
		}
		
		
		var tpage=Math.ceil(page/this.$store.state[this.type].default.page.pageListNum);
                var totalNum=(tpage-1)*this.$store.state[this.type].default.page.pageListNum;
		var newPage=[];
       
                
		for(var i=0;i<this.$store.state[this.type].default.page.pageListNum;i++){
			var tmp=++totalNum;
			
			if(tmp>this.$store.state[this.type].default.page.totalPage){
				this.$store.state[this.type].default.page.nextP=false
			}else{
				newPage.push(tmp)
			}
                }
                this.$data.currentPage=page;
                this.$store.state[this.type].default.page.pages=newPage
		
		this.$store.state[this.type].default.page.totalPageNowNum=tpage
		
                this.$store.dispatch('updateTableOf'+this.firstType,{page:page})
        }

   },
   props: ['firstType']

}
</script>