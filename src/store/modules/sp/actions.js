var request = require("superagent");
var dateFormat = require('dateformat');

export const updateByRegionOfSp=({dispatch,commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter
   state.default.filter.page=1
   query.cityCode=arg.code


   query.searchVal=''
   
    commit('updateFilterOfSp',{search:'d'});
   

    
   updateDataOfTable(query,state,rootState,commit,arg,dispatch)
}


export const updateFilterOfSp=({commit,state,rootState},arg)=>{
   
    commit('updateFilterOfSp',{arg:arg});
}

export const updateTableOfSp=({dispatch,commit,state,rootState},arg)=>{

    
   let tableList=[];
    let query=state.default.filter
    if(arg){
	if(arg.page){
	    query.page=arg.page
	}
	
    }
    updateDataOfTable(query,state,rootState,commit,arg,dispatch);
}


export const initTableOfSp=({commit,state,rootState},arg)=>{

    
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
export const updateByDateOfSp=({commit,state,rootState},arg)=>{
     state.default.filter.page=1
    commit('updateByDateOfSp',{arg:arg});
}

function updateDataOfTable(query,state,rootState,commit,arg,dispatch){

var url='/api/sp/dataList';

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
		  case 'rq':
		       chartList[val.alias].push({count:v.date});
		       break;
		  case 'trsp':
		       chartList[val.alias].push({count:v.stock_name});
		       break;
		  case 'gysmc':
		       chartList[val.alias].push({count:v.sp_name});
		       break;
		  case 'sl':
		       chartList[val.alias].push({count:v.total_num});
		       break;
		  case 'ssje':
                       chartList[val.alias].push({count:v.total_money/100});
                       break;
	  
		  default:;
	      }
	   
	   
	}); 
  });

//mutation

  if(arg!=undefined&&arg.page>0){
   }else{  
       
       dispatch('updatePage',{total:res.body.data.total,hasMore:res.body.data.hasMore,type:'sp'});
 }
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfSp',{total:res.body.data.total,list:chartList[val.alias],arg:arg,type:val.alias});
  });



  }  
});
    

}



function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 
 var chartList=[];

 var url='/api/sp/dataList';


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
	
	  //commit('initTableOfSp',{arg:arg,firstList:firstList,total:res.body.data.total,hasMore:res.body.data.hasMore})
	  resolve();
	  
      }

  });

    
}
