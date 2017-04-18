var request = require("superagent");
var tabList=require('components/data/fwz_chart_tab.json')
var dateFormat = require('dateformat');

var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');

var opt={
                chart: {
            type: 'line',
            zoomType: 'x'
        },
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


var citys=[];
export default {
     citys:citys,
        now:{
        province:'请选择',
        city:'全部',
        search:''
    },
    filter:{
      //  region:'all',
        //fwsName:'',
        dateStart:'',
        dateEnd:'',
	type:'fwzsl',
	threeType:'country',
	page:1,
	provinceCode:0,
	cityCode:0,
	pageNum:20
    },
    chartList:{
	fwzsl:opt,
	drxzsl:opt,
	sxztrs:opt,
	wgzrs:opt,
	xxztrs:opt,
	ygzrs:opt
    },
    tableList:{
	trtotal:0,
	dateList:[],
	firstList:[],
        drxzslList:[],
        fwzslList:[],
        sxztrsList:[],
        wgzrsList:[],
        xxztrsList:[],
        ygzrsList:[]
    },
    tabList:tabList,
    date:{
        start:'开始日期',
        end:'结束日期'
    },
    page:{
	total:0,
        totalPage:0,
        pages:[],
        pageListNum:5,
        preP:false,
        nextP:false,
        totalPageNowNum:1,
        placeholder:"输入跳转页码"
    },
     firstInit:false,
}
