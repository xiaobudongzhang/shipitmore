var request = require("superagent");
var tabList=require('components/data/sp_tab.json')
var dateFormat = require('dateformat');

var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');


var citys=[];
export default {
       citys:citys,
        now:{
        province:'请选择',
        city:'全部',
        search:''
    },

    filter:{
       // region:'all',
        typeAlias:'gys',
        dateStart:'',
        dateEnd:'',
	page:1,
	pageNum:20,
	searchVal:'',
	//provinceCode:0,
        cityCode:-1

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
	    name:"TR商品",
	    alias:"trsp",
	    
	},
	{
	    name:"供应商",
	    alias:"gys",
	    
	}
	
    ],
    selectNow:{name:'供应商',alias:'gys'}
    
    
    
}
