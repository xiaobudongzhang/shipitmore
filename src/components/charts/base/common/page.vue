<template>

<div class="ui  column grid"  id="commonpage">
           
	<div   class="icon item" @click="prePage" v-if="preP">  
	<!--<a >-->
          <i class="left chevron icon"></i>
        <!--</a>-->
	</div>

        <div :class="item==currentPage?'item active':'item'" @click="page"
           v-for="item in $store.state[type].default.page.pages"  :data-val=item>
	<!--<a :data-val=item>-->{{item}}<!--</a>-->
	</div>

	<div class="icon item" @click="nextPag" v-if="$store.state[type].default.page.nextP">
        <!--<a>-->
          <i class="right chevron icon"></i>
        <!--</a>-->
	</div>

        
          <div class="ui  labeled input" v-if="$store.state[type].default.page.total" >
                 <input type="text" :placeholder=$store.state[type].default.page.placeholder id="pageGoto">
          </div>

        

	  <div  id="pageGotoButton"  @click="goto"  v-if="$store.state[type].default.page.total">
           跳转
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
		if(totalNum>=this.$store.state[this.type].default.page.totalPage){
			console.log("大于最大页")
			return ;
			
		}

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
			}else if((val+that.$data.pageListNum)==that.$store.state[that.type].default.page.totalPage){	
			      that.$store.state[that.type].default.page.nextP=false
				 newPage.push(val+that.$data.pageListNum)
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
			}else if(tmp==this.$store.state[this.type].default.page.totalPage){
			      this.$store.state[this.type].default.page.nextP=false
				newPage.push(tmp)
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
<style rel="stylesheet/less" lang="less">

#commonpage{ 
  margin-bottom:30px;
  margin-top:30px;
  padding-right:20px;
   float:right;
        //width: 34px;
    height: 34px;
    //font-size:18px;
   .item{
   border-radius: 4px;
	padding:0px;
	margin:0px;
	text-align:center;
        color: #babbbb;
        background-color: white;
	width: 34px;
	height:34px;
	margin-left:15px;
	margin-right:15px;
	line-height: 30px;
	border-style: solid;
    	border-width: 1px;
    	border-color: #babbbb;
    	//color:#babbbb;
   }
  .item.active {
        width: 34px;
        height: 34px;
        line-height:30px;
	
        background-color: #517392;
	
		 color: white;
		 
	
  }

}


#pageGoto::-webkit-input-placeholder {
  color:#e2e2e2;
  font-size:12px;
}


#pageGoto::-moz-placeholder {
  color:#e2e2e2;
  font-size:12px;
}
#pageGoto::-ms-input-placeholder {
  color:#e2e2e2;
  font-size:12px;

}

#pageGoto{
font-size:12px;
width:188px;
height:34px;

}
#pageGotoButton{
	border-radius: 4px;
    font-size: 14px;
    background-color: #477290;
    width: 60px;
    height: 34px;
    margin-left: 20px;
    text-align: center;
    line-height: 32px;
    color: white;
}
</style>

