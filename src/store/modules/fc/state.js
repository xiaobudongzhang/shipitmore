var request = require("superagent");
var tabList=require('components/data/fc_tab.json')
var dateFormat = require('dateformat');

var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');

export default {
    
    filter:{
    
        typeAlias:'gys',
        dateStart:'',
        dateEnd:'',
	page:1,
	pageNum:20,
	searchVal:''
    },
    tableList:{
	trtotal:0,
	rqList:[],
	firstList:[],
        trspList:[],
        fwsmcList:[],
        slList:[],
	fcjeList:[]
    },
    tabList:tabList,
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
    date:{
	start:'开始日期',
	end:'结束日期'
    },
    select:[
	{
	    name:"供应商",
	    alias:"gys",
	    
	},
	{
	    name:"服务者",
	    alias:"fwz",
	    
	},
	{
	    name:"服务商",
	    alias:"fws",
	    
	}
    ],
    selectDate:[
        {
            name:"支付日期",
            alias:"zf",

        },
        {
            name:"完成日期",
            alias:"wc",

        }
    ],
    selectNow:{name:'供应商',alias:'gys'},
    selectNowDate:{name:'支付日期',alias:'zf'}
    
    
}
