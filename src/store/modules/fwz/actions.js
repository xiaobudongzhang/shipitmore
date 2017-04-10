var request = require("superagent");

export const updateByRegionOfFwz=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter
   state.default.filter.page=1
   query.cityCode=arg.code

   chartList=getData(query,rootState,state);

  commit('updateByRegionOfFwz',{list:chartList,arg:arg});
}


export const updateByFwsOfFwz=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.fwsName=arg.fwsName
    }
    chartList=getData(query,rootState,state);
    
    commit('updateByFwsOfFwz',{list:chartList,arg:arg});
}


export const updateByTypeOfFwz=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.type=arg.chartType
    }

    chartList=getData(query,rootState,state);

    commit('updateByTypeOfFwz',{list:chartList,arg:arg});
}


export const updateByDateOfFwz=({commit,state,rootState},arg)=>{
   
   let chartList=[];
   let query=state.default.filter
     state.default.filter.page=1

    if(arg){
       query.dateStart=arg.startDate
       query.dateEnd  =arg.endDate
    }

    chartList=getData(query,rootState,state);
    

    commit('updateByDateOfFwz',{list:chartList,arg:arg});
}

function getData(query,rootState,state){

    var tmp_page=query.page
    query.page=1;
    query.no_page=1

    if(state.default.date.start!='开始日期'||state.default.date.end!='结束日期'){
        query.pageNum=600
    }



 var chartList=[];
 request
  .get(rootState.default.reqUrl+'/api/fwz/dataList')
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err, res){
      if(res.ok&&res.body.code==="00000"){	  
          res.body.data.list.forEach(function(val,key,array){
	   
	      switch(query.type){
                  case 'fwzsl':
                       var date=new Date(val.date).getTime();
		       chartList.unshift([date,val.total]);
		  
                       break;
                  case 'drxzsl':
		       var date=new Date(val.date).getTime();
                       chartList.unshift([date,val.newbie]);
		  
                       break;
                  case 'sxztrs':
		       var date=new Date(val.date).getTime();
                       chartList.unshift([date,val.online]);

                       break;
                  case 'xxztrs':
		       var date=new Date(val.date).getTime();
                       chartList.unshift([date,val.offline]);

                       break;
                  case 'ygzrs':
                       var date=new Date(val.date).getTime();
                       chartList.unshift([date,val.follow]);

                       break;
                  case 'wgzrs':
                       var date=new Date(val.date).getTime();
                       chartList.unshift([date,val.unconcern]);

                       break;

                  default:;
              }

          });
      }
  });

    query.no_page=-1
    query.page=tmp_page
    query.pageNum=20
    return chartList;
}




export const updateTableOfFwz=({dispatch,commit,state,rootState},arg)=>{

    
   let tableList=[];
    let query=state.default.filter
    if(arg){
	if(arg.page){
	    query.page=arg.page
	}
	if(arg.threeType){
	    query.threeType=arg.threeType
	}
    }
    updateDataOfTable(query,state,rootState,commit,arg,dispatch);
}


export const initTableOfFwz=({commit,state,rootState},arg)=>{

    
   let tableList=[];
   let query=state.default.filter
    if(arg){
	if(arg.page){
            query.page=arg.page
	}
	if(arg.threeType){
            query.threeType=arg.threeType
	}
    }

    
    return new Promise(resolve=>{
	 initDataOfTable(query,state,rootState,commit,arg,resolve);
    });
    
}

function updateDataOfTable(query,state,rootState,commit,arg,dispatch){


var url='/api/fwz/dataList';

var chartList=[];
state.default.tabList.forEach(function(val,key,array){
 chartList[val.alias]=[]
});
 chartList['date']=[];




request
.get(rootState.default.reqUrl+url)
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.withCredentials()//跨域
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
        res.body.data.list.forEach(function(v,k,array){

	    
	    chartList['date'].push({count:v.date});
	    
            state.default.tabList.forEach(function(val,key,array){

              var name=val.alias+"List";
              switch(val.alias){
                  case 'fwzsl':
                       chartList[val.alias].push({count:v.total});
                       break;
                  case 'drxzsl':
                       chartList[val.alias].push({count:v.newbie});
                       break;
                  case 'sxztrs':
                       chartList[val.alias].push({count:v.online});
                       break;
                  case 'xxztrs':
                       chartList[val.alias].push({count:v.offline});
                       break;
                  case 'ygzrs':
                       chartList[val.alias].push({count:v.follow});
                       break;
		  case 'wgzrs':
                       chartList[val.alias].push({count:v.unconcern});
                       break;

                  default:;
              }


        });
  });

//mutation

  if(arg!=undefined&&arg.page>0){
   }else{
   //   commit('updatePageOfFwz',{total:res.body.data.total,hasMore:res.body.data.hasMore});
       dispatch('updatePage',{total:res.body.data.total,hasMore:res.body.data.hasMore,type:'fwz'});
 }
	

	

  commit('updateTableOfFwz',{list:chartList['date'],arg:arg,type:'date'});
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfFwz',{list:chartList[val.alias],arg:arg,type:val.alias});
  });



  }
});

    

}



function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 var firstType=state.default.filter.threeType
 var chartList=[];

 var url='/api/fwz/dataList';

 

  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.ok&&res.body.code==="00000"){
          res.body.data.list.forEach(function(v,k,array){
                firstList.push({val:""});
          });
          
          commit('initTableOfFwz',{arg:arg,firstList:firstList});
	  resolve()
      }
  });


}
