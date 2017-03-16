<template>

 <router-view></router-view>
<div id="container"  class="col-sm-9  col-md-10  main" >

  <div class="ui  attached tabular menu">
     	  <div class="item " data-tab="ddl">订单量</div>
     	  <div class="item active" data-tab="zfl">支付量</div>
	  <div class="item " data-tab="wzfl">未支付量</div>
  </div>

  <div class="ui bottom attached tab segment active" data-tab="ddl">
     <highcharts  :options="options" ref="highcharts" >
     </highcharts>
  </div>

  <div class=" ui bottom attached tab segment  active" data-remove-bug="1" data-tab="zfl">
     <highcharts  :options="options2" ref="highcharts">
     </highcharts>
  </div>

  <div class=" ui bottom attached tab segment  active" data-remove-bug="1" data-tab="wzfl">
     <highcharts  :options="options3" ref="highcharts">
     </highcharts>
  </div>




</div>
</template>

<script type="text/ecmascript-6">
export default{



       data(){

var highCharts=this.Highcharts;
//onload






var ddl_data=[];
var zfl_data=[];
var wzfl_data=[];


this.$http.get("http://192.168.1.38:8018/api/test/test")
.then(
	(res)=>{
		res.body.data.list.forEach(function(val,index,array){
			ddl_data=[];
			zfl_data=[];
			wzfl_data=[];

			if(val.use_scene==1){
				
				var date=new Date(val.date).getTime();
				ddl_data.push([date,val.order_paid_count]);
				zfl_data.push([date,val.order_total_count]);
				wzfl_data.push([date,val.order_unpaid_count]);
			} 
		});
	});


var initwidth=$("#container").width()-20;
//console.log(window.clientX)

//console.log($("[data-highcharts-chart]") )  
 

var opt={
    
    chart:{
        type:'spline',
        events:{
                load:function(){
			
		
		      //$timeout(function() {
                          //this.reflow();   
                     //});

			//this.setSize($("#container").width()-20,400,false);
                
		},
		redraw:function(){
		
		}
        },
	//margin: [0, 0, 0, 0],
//	reflow:true,
	//width:mwidth
    },
    labels:{
        items:[
                {
                        /*html:'Labels 1 : <a href="http://www.hcharts.cn" target="_blank">HCharts.cn</a>',
                        style:{
                                left:'50px',
                                top:'100px'data-highcharts-chart
                        }*/
                }
        ]
    },
    tooltip:{
        xDateFormat:'%Y-%m-%d',
        shared:true,
	useHTML:true,
	//headerFormat:'head',
	pointFormat:'{point.y}',
	
        /*crosshairs:[{
                width:3,
                color:'g[ 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]reen'
        },{
                width:2,
                color:'red'
        }]*/
    },
    title:{
        text:''
    },
    xAxis:{
        type:'datetime',
        //tickPixelInterval:150,
	dateTimeLabelFormats: {
        		      year: '%Y',
        		      month: '%Y-%m',
			      day:'%m-%d'
    	}
 },
    yAxis:{
         title: {
            text: '数量'
        },

    },
    credits:{
        enabled:false
    },
    series:[
        {
            name: '数量',
            data: ddl_data,
            //dashStyle:'longdash'
        }
    ],
    exporting:{
        //url:"http://192.168.1.38:8080/download/jpg"
    }

}




var opt2={

    chart:{
        type:'spline',
	//width:width,
        //marginRight: 50,
	//spacingRight:10,
	events:{
                load:function(){

                }
        },
	
    },
    labels:{
        items:[
                {
                        /*html:'Labels 1 : <a href="http://www.hcharts.cn" target="_blank">HCharts.cn</a>',
                        style:{
                                left:'50px',
                                tdata-highcharts-chartop:'100px'
                        }*/
                }
        ]
    },
    tooltip:{
        xDateFormat:'%Y-%m-%d',
        shared:true,
        useHTML:true,
        //headerFormat:'head',
        pointFormat:'{point.y}',

        /*crosshairs:[{
                width:3,
                color:'g[ 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]reen'
        },{
                width:2,
                color:'red'
        }]*/
    },
    title:{
        text:''
    },
    xAxis:{
        type:'datetime',
        //tickPixelInterval:150,
        dateTimeLabelFormats: {
                              year: '%Y',
                              month: '%Y-%m',
                              day:'%m-%d'
        }
 },
    yAxis:{
         title: {
            text: '数量'
        },

    },
    credits:{
        enabled:false
    },
    series:[
        {
            name: '数量',
            data: zfl_data,
            //dashStyle:'longdash'
        }
    ],
    exporting:{
        //url:"http://192.168.1.38:8080/download/jpg"
    }

}





var opt3={

    chart:{
	 //width:width,
        type:'spline',
        events:{
                load:function(){

                }
        }
    },
    labels:{
        items:[
                {
                        /*html:'Labels 1 : <a href="http://www.hcharts.cn" target="_blank">HCharts.cn</a>',
                        style:{
                                left:'50px',
                                top:'100px'
                        }*/
                }
        ]
    },
    tooltip:{
        xDateFormat:'%Y-%m-%d',
        shared:true,
        useHTML:true,
        //headerFormat:'head',
        pointFormat:'{point.y}',

        /*crosshairs:[{
                width:3,
                color:'g[ 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]reen'
        },{
                width:2,
                color:'red'
        }]*/
    },
    title:{
        text:''
    },
    xAxis:{
        type:'datetime',
        //tickPixelInterval:150,
        dateTimeLabelFormats: {
                              year: '%Y',
                              month: '%Y-%m',
                              day:'%m-%d'
        }
 },
    yAxis:{
         title: {
            text: '数量'
        },

    },
    credits:{
        enabled:false
    },
    series:[
        {
            name: '数量',
            data: wzfl_data,
            //dashStyle:'longdash'
        }
    ],
    exporting:{
        //url:"http://192.168.1.38:8080/download/jpg"
    }

}

                
              
//console.log(highCharts);
      return {
                       options:opt,
		       options2:opt2,
		       options3:opt3,
      }

       },
       
       mounted:function(){
		
		 $(".menu .item").tab();
		 

		var Highcharts=this.Highcharts;
		$.each($("[data-highcharts-chart]"), function () {
						     //$(window).trigger('resize');
    			//console.log(this)
			//console.log($(this).data('highchartsChart'))
			var highChart = Highcharts.charts[$(this).data('highchartsChart')];
		
	//	$(window).resize(function() {
   			//console.log("ddd")
			//console.log(highChart.setSize(500,200,true))
			//highChart.setSize($('#container').width(),500);
   		//	highChart.reflow();
	//	});	
			//console.log(highChart)
    			//var highChartCont = $(highChart.container).parent();
    			//console.log($("#container").width())
			//console.log(highChartCont.width())
			//highChart.setSize(50, $("#container").height(),true)
    			//highChart.hasUserSize = undefined;
		//	console.log('dd')
		//	highChart.reflow();
    		});

		//$(function(){ 
		//$(".bugactive").removeClass("active")
			//console.log($("[data-remove-bug]").removeClass("active"))
		//}); 
	
		//$("[data-remove-bug]").removeClass("active")
		 //$(".menu .item").tab();
		// console.log('cccc')
       },
       

}



$(function(){
	//延迟加载
	setTimeout(
		function(){$("[data-remove-bug]").removeClass("active")},
	 1000);


});
</script>

<style rel="stylesheet/less" lang="less">

       
</style>