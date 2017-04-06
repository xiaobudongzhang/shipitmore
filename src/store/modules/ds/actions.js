var request = require("superagent");

export const updateByRegionOfDs=({dispatch,commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter
   state.default.filter.page=1
   query.cityCode=arg.code

   updateDataOfTable(query,state,rootState,commit,arg,dispatch)
}

function updateCityList(rootState,code,state){

    var cityList=[];
   request
  .get(rootState.default.reqUrl+'/api/common/citys?parent_code='+code)
  //.query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err, res){
      if(res.ok&&res.body.code==="00000"){

           res.body.data.forEach(function(val,key,res){
             cityList.push(val);
         });
      }
  });
    return cityList;

}

export const updateFilterOfDs=({commit,state,rootState},arg)=>{


   
    commit('updateFilterOfDs',{arg:arg});
}

export const updateTableOfDs=({dispatch,commit,state,rootState},arg)=>{

    
   
   let tableList=[];
    let query=state.default.filter
    if(arg){
	if(arg.page){
	    query.page=arg.page
	}
	
    }
    updateDataOfTable(query,state,rootState,commit,arg,dispatch);
}


export const initTableOfDs=({commit,state,rootState},arg)=>{

    
   let tableList=[];
   let query=state.default.filter
    if(arg){
	if(arg.page){
            query.page=arg.page
	}
	
    }

    
    return new Promise(resolve=>{
	initDataOfTable(query,state,rootState,commit,arg,resolve);
    });
}

//兼容日期插件
export const updateByDateOfDs=({commit,state,rootState},arg)=>{
     state.default.filter.page=1
    commit('updateByDateOfDs',{arg:arg});
}




function updateDataOfTable(query,state,rootState,commit,arg,dispatch){

var url='/api/ds/dataList';

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
                  case 'fwzxm':
                       chartList[val.alias].push({count:v.fwz_name});
                       break;
                  case 'trmc':
                       chartList[val.alias].push({count:v.tr_name});
                       break;
                  case 'zfje':
                       chartList[val.alias].push({count:v.pay_money});
                       break;
                  case 'zfzt':
                       chartList[val.alias].push({count:v.status_name});
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
       
      dispatch('updatePage',{total:res.body.data.list.total,hasMore:res.body.data.hasMore,type:'ds'});
 }
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfDs',{total:res.body.data.list.total,list:chartList[val.alias],arg:arg,type:val.alias});
  });



  }
});


}


function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 
 var chartList=[];

 var url='/api/ds/dataList';


  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.statusCode==200&&res.ok&&res.body.code==="00000"){
          res.body.data.list.list.forEach(function(v,k,array){
                firstList.push({val:""});
          });

          commit('initTableOfDs',{arg:arg,firstList:firstList,total:res.body.data.total,hasMore:res.body.data.hasMore});
	  resolve();
      }
  });


}
