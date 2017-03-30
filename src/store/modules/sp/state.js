var request = require("superagent");
var tabList=require('components/data/sp_tab.json')
var dateFormat = require('dateformat');

var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');

export default {
    
    filter:{
        region:'all',
        typeAlias:'gys',
        dateStart:weekStart,
        dateEnd:weekEnd,
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
        totalPage:0,
        pages:[1,2,3,4,5],
	pageListNum:5,
	preP:false,
	nextP:false,
	totalPageNowNum:1,
	placeholder:"输入跳转页码"
    },
    date:{
	start:weekStart,
	end:weekEnd
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
    selectNow:{name:'供应商',alias:'gys'}
    
    
    
}
