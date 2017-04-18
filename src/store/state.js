import Vue from 'vue'
import VueResource from 'vue-resource'
var request = require("superagent");
var dateFormat = require('dateformat');
var commonConfig=require('../common_config.json');
//var leftMenus = require('components/data/leftMenu.json');
var leftMenus=[];


Vue.use(VueResource);

var citys=[];
var citys_common=[];
var citys_sp=[];
var citys_limit=[];
var provinces=[];
var reqUrl=commonConfig.baseapi.reqUrl;





var citys_merge=[];




Vue.http.get(reqUrl+"/api/common/leftMenus").then(res=>{
    if(res.status==200&&res.data.code==='00000'){
          
	res.body.data.forEach(function(val,key,array){
              leftMenus.push(val);
          }); 
    }
},res=>{});




var fws=[];


var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');



var out={
    citys:citys,
    citys_common:citys_common,
    citys_sp:citys_sp,
    citys_merge:citys_merge,
    citys_limit:citys_limit,
    provinces:provinces,
    reqUrl:reqUrl,
    fws:fws,
    date:{
        start:weekStart,
        end:weekEnd
    },
    cookieDomain:commonConfig.baseapi.cookieDomain,
    leftMenus:leftMenus,
    cityLimit:1
};

export default out;
