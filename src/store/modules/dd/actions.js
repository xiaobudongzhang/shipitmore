var request = require("superagent");



export const updateByRegionOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter
   
   if(arg){
       query.region=arg.pinyin
    }
   chartList=getData(query,rootState);
   
   commit('updateByRegionOfDd',{list:chartList,arg:arg});
}

export const updateByFwsOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.fwsName=arg.fwsName
    }
    chartList=getData(query,rootState);
    
    commit('updateByFwsOfDd',{list:chartList,arg:arg});
}


export const updateByTypeOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.type=arg.chartType
    }

    chartList=getData(query,rootState);

    commit('updateByTypeOfDd',{list:chartList,arg:arg});
}


export const updateByDateOfDd=({commit,state,rootState},arg)=>{
   
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.dateStart=arg.startDate
       query.dateEnd  =arg.endDate
    }

    chartList=getData(query,rootState);
    

    commit('updateByDateOfDd',{list:chartList,arg:arg});
}

function getData(query,rootState){
 var chartList=[];
 request
  .get(rootState.default.reqUrl+'/api/mock/dd')
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err, res){
      if(res.ok&&res.body.code==="00000"){
          res.body.data.forEach(function(val,key,array){
              var date=new Date(val.date).getTime();
              chartList.push([date,val.count]);
          });
      }
  });

    return chartList;
}




export const updateTableOfDd=({commit,state,rootState},arg)=>{

    
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
    updateDataOfTable(query,state,rootState,commit,arg);
}


export const initTableOfDd=({commit,state,rootState},arg)=>{

    
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

    
    return new Promise((resolve)=>{
	initDataOfTable(query,state,rootState,commit,arg,resolve);
    });
    
}

function updateDataOfTable(query,state,rootState,commit,arg){

 var firstList=[];
 var firstOk=false;//只调用一次第一列
state.default.tabList.forEach(function(val,key,array){
 var name=val.alias+"List";
 var firstType=state.default.filter.threeType
 var chartList=[];
   
 var url='/api/mock/dd';

 if(firstType=='city'){

     url='/api/mock/getListByCity'
 }else if(firstType=='detail'){

     url='/api/mock/getListByUser'
 }
    


  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.ok&&res.body.code==="00000"){
          res.body.data.forEach(function(v,k,array){
              chartList.push({count:v.count});
	      
	      
            if(!firstOk){
                firstList.push({val:v.name});
            }

          });

        
	  if(!firstOk){
	      commit('updateTableFirstColumnOfDd',{list:firstList});
	  
	  }
	  firstOk=true;
	  //mutation
	  
	  
	  commit('updateTableOfDd',{list:chartList,arg:arg,type:val.alias});
      }
  });
});

    

}



function initDataOfTable(query,state,rootState,commit,arg,resolve){

 var firstList=[];
 var firstType=state.default.filter.threeType
 var chartList=[];

 var url='/api/mock/dd';

 if(firstType=='city'){

     url='/api/mock/getListByCity'
 }else if(firstType=='detail'){

     url='/api/mock/getListByUser'
 }



  request
  .get(rootState.default.reqUrl+url)
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err,res){
      if(res.ok&&res.body.code==="00000"){
          res.body.data.forEach(function(v,k,array){
                firstList.push({val:""});
          });

          commit('initTableOfDd',{arg:arg,firstList:firstList});
	  resolve();
      }
  });


}
