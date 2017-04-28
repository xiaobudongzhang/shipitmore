<template>
<div>
    <div class="ui dropdown item date datestart" @click="startTime">
    {{$store.state[type].default.date.start}}   <i class="dropdown icon" id="datetimepickerstart"></i>
    <!--<div id="datetimepickerstart"></div>-->
    <!--<input      id="datetimepickerstart">-->
    </div>

    <div class="datetextone ui dropdown item">
    至 
    </div>

    <div class="ui dropdown item date dateend" @click="endTime"  >
    {{$store.state[type].default.date.end}}   <i class="dropdown icon" id="datetimepickerend"></i>
    <!--<input      id="datetimepickerend" >-->
    </div>


  <div class="ui dropdown item">
       
       <div class="ui primary button" @click="">快速选择</div>
  


  <div class="menu">

       <a class="item"  data-val="all" @click="threeMonth">过去三个月</a>
       <a class="item"  data-val="all" @click="oneMonth">过去一个月</a>
       <a class="item"  data-val="all" @click="oneWeek">过去一周</a>
       
       <!--<div class="item">
         <i class="left dropdown icon"></i>
         <span class="text">自选</span>
         <div class="left menu">
             
	     <div class="item" @click="startTime">开始时间</div>
	     
	     
             <div class="item" @click="endTime">结束时间</div>
         </div>
       </div>-->




     
       
    </div>
     
  </div>



</div>



</template>

<script type="text/ecmascript-6">
var dateFormat = require('dateformat');

var dateformat={
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    //todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: 'yyyy-mm-dd',
    
    
}



function initSelectDate(start,end,vuex){
	 


               var that=vuex
               var dStart=start
               var dEnd=end
               that.$store.state[that.type].default.date.start=dStart;
               that.$store.state[that.type].default.date.end=dEnd;
               
	       var actionName="updateByDateOf"+that.firstType
               that.$store.dispatch(actionName, { firstType: that.firstType,startDate:dStart,endDate:dEnd})
	       that.$store.dispatch('updateTableOf'+that.firstType)
} 

export default{

       components:{
	
       },
       data(){
	 return {
		  
		  selectDateNow:'oneWeek',
		  type:"module_"+(this.firstType.toLowerCase())
		}
       },
        props: ['firstType'],
	mounted(){
	
	//init select tab
	$('.ui.menu').dropdown({
               on: 'hover'
        });

	$('.ui.dropdown').dropdown({
               on: 'hover'
        });
	

        $('.ui.menu a.item')
        .on('click', function() {
            $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        });
	

	
	        //登录校验 最终在server端做
        if(this.$cookie.get('txy_name')==null||this.$cookie.get('txy_token')==null){

                this.$router.push('/login')
        }

	
	},
	methods:{
	
	startTime(){
	
		var that=this
		
		

                $('#datetimepickerstart').datetimepicker(dateformat)
		.datetimepicker('setDate',new Date(this.$store.state[this.type].default.date.start))
	      	.datetimepicker('show')
	        .on("changeDate",function(ev){
		
                    that.$store.state[that.type].default.date.start=
			dateFormat(ev.date.valueOf(),'yyyy-mm-dd');  
		    var actionName="updateByDateOf"+that.firstType
		   
		    that.$store.dispatch(actionName, {startDate:ev.target.value,type:'start' })
		    that.$store.dispatch('updateTableOf'+that.firstType)
		    
		    //that.endTime(ev.target.value);
         	});		
	},
	endTime(enddate){
	//this.$store.state[this.type].default.date.end	

		 var that=this
		 $('#datetimepickerend').datetimepicker(dateformat)
		 .datetimepicker('setDate',new Date(enddate))
        	 .datetimepicker('show')
        	 .on("changeDate",function(ev){
			 that.$store.state[that.type].default.date.end=
			 dateFormat(ev.date.valueOf(),'yyyy-mm-dd');
			 var actionName="updateByDateOf"+that.firstType
			 
			 that.$store.dispatch(actionName, { endDate:ev.target.value,type:'end'})	
			that.$store.dispatch('updateTableOf'+that.firstType)
        	 });
	},
	threeMonth(){
		if(this.$data.selectDateNow=='threeMonth'){
			//return;
		}
	     this.$data.selectDateNow='threeMonth'
	     var date = new Date(); 
	     
	     date.setDate(date.getDate()-1);
   	     var end=dateFormat(date,'yyyy-mm-dd');
	     date.setMonth(date.getMonth()-3); 
	     var start=dateFormat(date,'yyyy-mm-dd');
	
	    initSelectDate(start,end,this)
	},
	oneMonth(){
		if(this.$data.selectDateNow=='oneMonth'){
                        //return;
                }
	     this.$data.selectDateNow='oneMonth'
	     var date = new Date();

             date.setDate(date.getDate()-1);
             var end=dateFormat(date,'yyyy-mm-dd');
             date.setMonth(date.getMonth()-1);
             var start=dateFormat(date,'yyyy-mm-dd');

	    initSelectDate(start,end,this)
	},
	oneWeek(){
	
		if(this.$data.selectDateNow=='oneWeek'){
                        //return;
                }		

	     this.$data.selectDateNow='oneWeek'
	     var date = new Date();

             date.setDate(date.getDate()-1);
             var end=dateFormat(date,'yyyy-mm-dd');
             date.setDate(date.getDate()-6);
             var start=dateFormat(date,'yyyy-mm-dd');
	     
	    initSelectDate(start,end,this)
	},
	

	
	
	
	}

}
</script>
<style rel="stylesheet/less" lang="less">
.datetimepicker {
	//left:55% !important;
	margin-top: 100px !important;	
}

.mydate{
  
  .datetextone.ui.dropdown.item {
    padding-right: 22px;
    padding-left:22px;
   // width:44px;
  }
 
 .ui.dropdown.item.date.dateend{
	margin-right:24px;
 }
  .ui.dropdown.item.date{
    font-size:14px;
    padding-left:10px;
    border-style: solid;
    border-color: #dadadd;
    border-width: 1px;
    width:146px;
    height:40px;
    line-height:40px;

    i.dropdown.icon{
	//padding-left:48px;
    }

    
  }


  .ui.primary.button{
	        width:100px;
                height:38px;
                background-color:#527493;
                line-height:16px;
                font-size:14px;
  }
}
</style>