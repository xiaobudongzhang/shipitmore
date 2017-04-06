var request = require("superagent");

export const updateByRegionOfHh=({dispatch,commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter
    state.default.filter.page=1
    query.cityCode=arg.code

   chartList=updateDataOfTable(query,state,rootState,commit,arg,dispatch);

  commit('updateFilterOfHh',{list:chartList,arg:arg});
}




export const updateFilterOfHh=({commit,state,rootState},arg)=>{


   
    commit('updateFilterOfHh',{arg:arg});
}

export const updateTableOfHh=({dispatch,commit,state,rootState},arg)=>{

    
   let tableList=[];
    let query=state.default.filter

    
    if(arg){
	if(arg.page){
	    query.page=arg.page
	}
	
    }
    updateDataOfTable(query,state,rootState,commit,arg,dispatch);
}


export const initTableOfHh=({commit,state,rootState},arg)=>{

    
   let tableList=[];
   let query=state.default.filter
    
    if(arg){
	if(arg.page){
            query.page=arg.page
	}
	
    }

    
    return new Promise(resolve=>{
	initDataOfTable(query,state,rootState,commit,arg,resolve);
    })
    
}

//兼容日期插件
export const updateByDateOfHh=({commit,state,rootState},arg)=>{
     state.default.filter.page=1
    commit('updateByDateOfHh',{arg:arg});
}


function updateDataOfTable(query,state,rootState,commit,arg,dispatch){

var url='/api/hh/dataList';

var chartList=[];
state.default.tabList.forEach(function(val,key,array){
 chartList[val.alias]=[]
});




request
.get(rootState.default.reqUrl+url)
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
//.withCredentials()//跨域
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
        res.body.data.list.list.forEach(function(v,k,array){

            state.default.tabList.forEach(function(val,key,array){

              var name=val.alias+"List";
              switch(val.alias){
                  case 'spid':
                       chartList[val.alias].push({count:v.pid});
                       break;
                  case 'hhsp':
                       chartList[val.alias].push({count:v.pname});
                       break;
                  case 'tzrxm':
                       chartList[val.alias].push({count:v.fwz_name});
                       break;
                  case 'hhcs':
                       chartList[val.alias].push({count:v.chat_total_num});
                       break;
		  case 'hhs':
                       chartList[val.alias].push({count:v.order_num});
                       break;
                  case 'rq':
                       chartList[val.alias].push({count:v.date});
                       break;

                  default:;
              }


        });
  });

//mutation

  if(arg!=undefined&&arg.page>0){
   }else {
       
      dispatch('updatePage',{total:res.body.data.list.total,hasMore:res.body.data.hasMore,type:'hh'});
 }
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfHh',{total:res.body.data.list.total,list:chartList[val.alias],arg:arg,type:val.alias});
  });



  }
});


}

function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 
 var chartList=[];

 var url='/api/hh/dataList';

  var pageNum=query.pageNum
  query.pageNum=1


  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      query.pageNum=pageNum
      if(res.ok&&res.body.code==="00000"){
	var forNum=Math.min(pageNum,res.body.data.list.total)  
          
	  for(var i=0;i<forNum;i++){
	        firstList.push({val:""});
	  }
	  
	  

          commit('initTableOfHh',{total:res.body.data.list.total,arg:arg,firstList:firstList});
	  resolve()
      }
  });


}
