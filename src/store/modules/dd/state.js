var request = require("superagent");
var tabList=require('components/data/dd_country_chart_tab.json')

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
        },
        //lang: {
	  //   resetZoom:"fff"
	  //  months: ['一月', '二月', '三月', '四月', '五月', '六月',  '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    //weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	//}
    
};





var citys=[];
export default {
     citys:citys,
    now:{
	province:'请选择',
	city:'',
	search:'',
	city_detail:''
    },
    filter:{
        cityCode:0,
	//provinceCode:0,
        fwsName:'',
        dateStart:'',
        dateEnd:'',
	type:1,
	threeType:'country',
	page:1,
	chartType:'zdd',
	pageNum:20

    },
    chartList:{
	zdd:opt,
	bzje:opt,
	bzsl:opt,
	cdje:opt,
	cdsl:opt,
	ddxq:opt,
	tdje:opt,
	tdsl:opt,
    },
    tableList:{
	trtotal:0,
	tmpList:[],
        zddList:[],
        ddxqList:[],
        cdjeList:[],
        cdslList:[],
        tdjeList:[],
        tdslList:[],
        bzjeList:[],
        bzslList:[]
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
    commons:{
	firstThName:'日期'
    }

}
