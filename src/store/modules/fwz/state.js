var request = require("superagent");
var tabList=require('components/data/fwz_chart_tab.json')

var opt={

        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
          type:'datetime',
          dateTimeLabelFormats: {
                              year: '%Y',
                              month: '%Y-%m',
                              day:'%m-%d'
           }
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            xDateFormat:'%m-%d',
            pointFormat:' {point.y}'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '  ',
            data:[]
        }],
        credits:{
            enabled:false // 禁用版权信息
        }
};



export default {
    
    filter:{
        region:'all',
        fwsName:'',
        dateStart:'',
        dateEnd:'',
	type:'drxzsl',
	threeType:'country',
	page:1
    },
    chartList:{
	drxzsl:opt,
	fwzsl:opt,
	sxztrs:opt,
	wgzrs:opt,
	xxztrs:opt,
	ygzrs:opt
    },
    tableList:{
	trtotal:0,
	firstList:[],
        drxzslList:[],
        fwzslList:[],
        sxztrsList:[],
        wgzrsList:[],
        xxztrsList:[],
        ygzrsList:[]
    },
    tabList:tabList
 
}
