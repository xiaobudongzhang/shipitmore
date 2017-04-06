var request = require("superagent");


export const updateLimitList=({commit,state,rootState},arg)=>{
    
    var query={};

    if(arg&&arg.currentModule){
	query.parent_module_name_alias=arg.currentModule
    }

    return new Promise(resolve=>{
	updateData(query,state,rootState,commit,arg,resolve);
    });
}


export const getLeftMenuLimit=({commit,state,rootState},arg)=>{

    var query={};

    if(arg&&arg.currentModule){
        query.parent_module_name_alias=arg.currentModule
    }

    return new Promise(resolve=>{
        getLimitData(query,state,rootState,commit,arg,resolve);
    });
}


function updateData(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 var chartList=[];
 var url='/api/limit/getLimitList';

  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.statusCode==200&&res.ok&&res.body.code==="00000"){
          
	  var dataList=res.body.data;
	 
          commit('updateLimitList',{arg:arg,dataList:dataList});
	  resolve();
      }
  });


}


function getLimitData(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 var chartList=[];
 var url='/api/limit/getLimitList';

  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.statusCode==200&&res.ok&&res.body.code==="00000"){

          var dataList=res.body.data;
	  
          commit('updateLeftMenus',{arg:arg,dataList:dataList,rootState:rootState});
          resolve();
      }
  });


}
