var request = require("superagent");

export const downloadOfDd=({commit,state,rootState},arg)=>{


    commit('downloadOfDd',{arg:arg});
}


export const updateFilterOfDd=({commit,state,rootState},arg)=>{


    commit('updateFilterOfDd',{arg:arg});
}

export const updateXq=({commit,state,rootState},arg)=>{

    
    commit('updateXq',{arg:arg});
}

export const returnme=({commit,state,rootState},arg)=>{


    commit('returnme',{arg:arg});
}

export const returnmedetail=({commit,state,rootState},arg)=>{


    commit('returnmedetail',{arg:arg});
}



export const updateChart=({commit,state,rootState},arg)=>{

   let chartList=[];
   let query=state.default.filter
     chartList=getData(query,rootState,state);

    commit('updateChart',{arg:arg,list:chartList});
}



export const updateByRegionOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   
    
   state.default.filter.page=1        

  arg.mytype='region'
  commit('updateFilterOfDd',{arg:arg});

  let query=state.default.filter
  chartList=getData(query,rootState,state);
   
  commit('updateByRegionOfDd',{list:chartList,arg:arg});
}




export const updateByFwsOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.fwsName=arg.fwsName
    }
    chartList=getData(query,rootState,state);
    
    commit('updateByFwsOfDd',{list:chartList,arg:arg});
}


export const updateByTypeOfDd=({commit,state,rootState},arg)=>{
   let chartList=[];
   let query=state.default.filter

    if(arg){
       query.chartType=arg.chartType
    }

    chartList=getData(query,rootState,state);

    commit('updateByTypeOfDd',{list:chartList,arg:arg});
}


export const updateByDateOfDd=({commit,state,rootState},arg)=>{
   
   let chartList=[];
   let  query={}
    query = state.default.filter
    state.default.filter.page=1

    if(arg){
       query.dateStart=arg.startDate
       query.dateEnd  =arg.endDate
    }

    chartList=getData(query,rootState,state);
    

    commit('updateByDateOfDd',{list:chartList,arg:arg});
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
  .get(rootState.default.reqUrl+'/api/dd/dataList')
  .query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err, res){
      if(res.ok&&res.body.code==="00000"){
          res.body.data.list.forEach(function(val,key,array){

	      var date=new Date(val.date).getTime();

              switch(query.chartType){
                  case 'zdd':
                       chartList.unshift([date,val.orders_num]);

                       break;
                  case 'ddxq':
                       chartList.unshift([date,val.orders_detail_num]);

                       break;
                  case 'cdje':
                       chartList.unshift([date,val.pay_money]);

                       break;
                  case 'cdsl':
                       chartList.unshift([date,val.done_num]);

                       break;
                  case 'tdje':
                       chartList.unshift([date,val.refund_money]);

                       break;
                  case 'tdsl':
                       chartList.unshift([date,val.refund_num]);

                       break;

		 case 'bzje':
                       chartList.unshift([date,val.reimburse_money]);

                       break;


		  case 'bzsl':
                       chartList.unshift([date,val.reimburse_num]);

                       break;


                  default:;
              }

          });
      }
  });
    
    query.no_page=-1
    query.page=tmp_page;
    query.pageNum=20;
 return chartList;

}




export const updateTableOfDd=({dispatch,commit,state,rootState},arg)=>{

    
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





function updateDataOfTable(query,state,rootState,commit,arg,dispatch){



var url='/api/dd/dataList';


    if(state.default.filter.threeType=='country'){
        //日期
      
    }else{
	state.default.filter.pageNum=200;
    }



var chartList=[];
state.default.tabList.forEach(function(val,key,array){
 chartList[val.alias]=[]
});
 chartList['tmp']=[];




request
.get(rootState.default.reqUrl+url)
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.withCredentials()//跨域dispatch
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
        res.body.data.list.forEach(function(v,k,array){

	    
	
	    if(state.default.filter.threeType=='country'){
		 chartList['tmp'].push({count:v.date,val:v.date});
	    }else if(state.default.filter.threeType=='city'){
		
		 chartList['tmp'].push({count:v.city_name,val:v.city_code});
	    }else{
		
		 chartList['tmp'].push({count:v.fws_name,val:''});
	    }
           

            state.default.tabList.forEach(function(val,key,array){

              var name=val.alias+"List";
              switch(val.alias){
                  case 'zdd':
                       chartList[val.alias].push({count:v.orders_num});
                       break;
                  case 'ddxq':
                       chartList[val.alias].push({count:v.orders_detail_num});
                       break;
                  case 'cdje':
                       chartList[val.alias].push({count:v.pay_money});
                       break;
                  case 'cdsl':
                       chartList[val.alias].push({count:v.done_num});
                       break;
                  case 'tdje':
                       chartList[val.alias].push({count:v.refund_money});
                       break;
                  case 'tdsl':
                       chartList[val.alias].push({count:v.refund_num});
                       break;
		  case 'bzje':
                       chartList[val.alias].push({count:v.reimburse_money});
                       break;
		  case 'bzsl':
                       chartList[val.alias].push({count:v.reimburse_num});
                       break;

		  
                  default:;
              }


        });
  });

//mutation

	
  if(arg!=undefined&&arg.page>0){
   }else{
       dispatch('updatePage',{total:res.body.data.total,hasMore:res.body.data.hasMore,type:'dd'});
   }
  
  state.default.filter.pageNum=20;

  commit('updateTableOfDd',{total:res.body.data.total,list:chartList['tmp'],arg:arg,type:'tmp'});
  
  state.default.tabList.forEach(function(val,key,array){
      commit('updateTableOfDd',{list:chartList[val.alias],arg:arg,type:val.alias,total:res.body.data.total});
  });



  }
});



    

}



function initDataOfTable(query,state,rootState,commit,arg,resolve){

  var firstList=[];
 var firstType=state.default.filter.threeType
 var chartList=[];

 var url='/api/dd/dataList';



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
	  
          commit('initTableOfDd',{total:res.body.data.total,arg:arg,firstList:firstList});
          resolve()
      }
  });



}
