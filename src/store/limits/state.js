var request = require("superagent");
var commonConfig=require('../../common_config.json');


var citys_merge=[];
var reqUrl=commonConfig.baseapi.reqUrl;


var query={}

request
.get(reqUrl+'/api/common/citys_common')
.query(query) // query string
.end(function(err, res){
      if(res.ok&&res.body.code==="00000"){

	res.body.data.forEach(function(val,key,res){
             if(!in_citys_merge(val)){
                 citys_merge.push(val)
             }

	});

      }
});



request
.get(reqUrl+'/api/common/citys_sp')
.query(query) // query string
.end(function(err, res){
      if(res.ok&&res.body.code==="00000"){

	res.body.data.forEach(function(val,key,res){
             if(!in_citys_merge(val)){
                 citys_merge.push(val)
             }

        });


      }
});





function in_citys_merge(val){

    for(var i=0;i<citys_merge.length;i++){

        if(citys_merge[i].code==val.code){
            return true
        }
    }

    return false;
}


var qxListObj={}

for(var i=1;i<1000;i++){

    qxListObj[i]=[];
}

export default {
    tabList:[
	{name:'账号'},
	{name:'操作'},
	{name:'城市权限'}
    ],
    tableList:{
	zhList:[],
	
    },

    qxListObj:qxListObj,
    citys_merge:citys_merge
}
