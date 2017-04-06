import Vue from 'vue'
import VueResource from 'vue-resource'
var request = require("superagent");
var dateFormat = require('dateformat');
var commonConfig=require('../common_config.json');
//var leftMenus = require('components/data/leftMenu.json');
var leftMenus=[];


Vue.use(VueResource);

var citys=[];
var provinces=[];
var reqUrl=commonConfig.baseapi.reqUrl;


Vue.http.get(reqUrl+"/api/common/citys?level=2").then(res=>{
    if(res.status==200&&res.data.code==='00000'){
	 res.data.data.forEach(function(val,key,res){
	     provinces.push(val);
	 });
    
    }
},res=>{});



Vue.http.get(reqUrl+"/api/common/leftMenus").then(res=>{
    if(res.status==200&&res.data.code==='00000'){
          
	res.body.data.forEach(function(val,key,array){
              leftMenus.push(val);
          }); 
    }
},res=>{});


var fws=[];
request
.get(commonConfig.baseapi.reqUrl+'/api/common/fws')
  //.query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){
    // Do something
      if(res.ok&&res.body.code==="00000"){
          res.body.data.forEach(function(val,key,array){
              fws.push(val);
          });
      }
  });


var date = new Date();
date.setDate(date.getDate()-1);

var weekEnd=dateFormat(date,'yyyy-mm-dd');
date.setDate(date.getDate()-6);
var weekStart=dateFormat(date,'yyyy-mm-dd');

var out={
    citys:citys,
    provinces:provinces,
    reqUrl:reqUrl,
    fws:fws,
    date:{
        start:weekStart,
        end:weekEnd
    },
    cookieDomain:commonConfig.baseapi.cookieDomain,
    leftMenus:leftMenus
};

export default out;
