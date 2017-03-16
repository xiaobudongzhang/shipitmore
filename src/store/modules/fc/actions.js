var request = require("superagent");
var dateFormat = require('dateformat');

export const updateFilterOfFc=({commit,state,rootState},arg)=>{


   
    commit('updateFilterOfFc',{arg:arg});
}

export const updateTableOfFc=({commit,state,rootState},arg)=>{

    
   let tableList=[];
    let query=state.default.filter
    if(arg){
	if(arg.page){
	    query.page=arg.page
	}
	
    }
    updateDataOfTable(query,state,rootState,commit,arg);
}


export const initTableOfFc=({commit,state,rootState},arg)=>{

    
   let tableList=[];
   let query=state.default.filter
    if(arg){
	if(arg.page){
            query.page=arg.page
	}
	
    }
  //init先于update
  return new Promise(resolve=>{
       initDataOfTable(query,state,rootState,commit,arg,resolve);
  });
 
 
}

//兼容日期插件
export const updateByDateOfFc=({commit,state,rootState},arg)=>{

    commit('updateByDateOfFc',{arg:arg});
}

function updateDataOfTable(query,state,rootState,commit,arg){

var url='/api/fc/dataList';

var chartList=[];
state.default.tabList.forEach(function(val,key,array){
 chartList[val.alias]=[]
});




request
.get(rootState.default.reqUrl+url)
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.withCredentials()//跨域
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
	res.body.data.list.forEach(function(v,k,array){

	    state.default.tabList.forEach(function(val,key,array){
	        
	      var name=val.alias+"List";
	      switch(val.alias){
		  case 'trsp':
		       chartList[val.alias].push({count:v.stock_name});
		       break;
		  case 'fwsmc':
		       chartList[val.alias].push({count:v.user_name});
		       break;
		  case 'sl':
		       chartList[val.alias].push({count:v.num});
		       break;
		  case 'fcje':
		       chartList[val.alias].push({count:v.fc});
		       break;
		  case 'rq':
		       var tmpDate=dateFormat(v.pay_dt*1000,"yyyy-mm-dd");
		  
                       chartList[val.alias].push({count:tmpDate});
                       break;
	  
		  default:;
	      }
	   
	   
	}); 
  });

//mutation

  if(arg!=undefined&&arg.page>0){
   }else{  
      commit('updatePageOfFc',{total:res.body.data.total,hasMore:res.body.data.hasMore});
 }
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfFc',{list:chartList[val.alias],arg:arg,type:val.alias});
  });



  }  
});
    

}



function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 
 var chartList=[];

 var url='/api/fc/dataList';


  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end((err,res)=>{
      if(res.ok&&res.body.code==="00000"){
          res.body.data.list.forEach(function(v,k,array){
                firstList.push({val:""});
          });
	 
	  commit('initTableOfFc',{arg:arg,firstList:firstList,total:res.body.data.total,hasMore:res.body.data.hasMore});
	  resolve();
	  
      }

  });

    
}
