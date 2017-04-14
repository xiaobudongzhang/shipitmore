var request = require("superagent");


var exportData=[];
var awaitme = require('await');

//所有的开始初始化
export const initFirstAll=({commit,state,rootState},arg)=>{

    if(arg.region){
	return new Promise((resolve)=>{
	
	     initRegionLimit(commit,state,rootState,arg,resolve);
	});
	
    }
    

}



function initRegionLimit(commit,state,rootState,arg,resolve){



var citys_limit=[];
var query={};

var first=true

request
.get(rootState.default.reqUrl+"/api/common/getUserCitys")
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
//.withCredentials()//跨域
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
   
	rootState[arg.type].default.filter.type=2
	res.body.data.forEach(function(val,key,res){

	    if(first){
		rootState[arg.type].default.now.city=val.name
		

		switch(arg.type){
		    case 'module_fwz':
		    case 'module_sp':
		   
		    

		    rootState[arg.type].default.filter.cityCode=val.code
		    break;

		    case 'module_dd':
		    if(val.code==0){
			rootState[arg.type].default.filter.type=1
		    }
		    
		    case 'module_hh':
		    case 'module_ds':
		    rootState[arg.type].default.filter.cityName=val.name
		    break;

		    default:
		    break;
		}
		
		first=false
	    }
             citys_limit.push(val);
         });
	rootState.default.citys_limit=citys_limit
	
	resolve();
	
  }
});



}





export const updatePage=({commit,state,rootState},arg)=>{
   commit('updatePage',arg);
}



export const download=({dispatch,commit,state,rootState},arg)=>{
    
    var stype=arg.type;
    
    var total=rootState['module_'+stype].default.page.total
    var query=rootState['module_'+stype].default.filter
    var tabList=rootState['module_'+stype].default.tabList

    

    if(total<1){
	console.log('下载总数小于1')
	return;
    }
    var perNum=90;//每次导出多少条
    
    var totalPage=Math.ceil(total/perNum)


    query.pageNum=perNum; 

    var loopPage=[];
    for(var i=0;i<totalPage;i++){
	loopPage.push('page'+i);
    }


    var getThings = awaitme(...loopPage)
    
    var last=false
    for(var i=0;i<totalPage;i++){
	query.page=i+1;	
        getDataList(query,state,rootState,commit,arg,dispatch,'page'+i,getThings,last);
    }


   
    var mymap=getMap(stype,rootState);
    var firstTh=[];

    mymap.forEach(function(v,k,array){
	firstTh.push(v.name);
    });
    
    var toexp=[];
    toexp.push(firstTh);

    
    
    
  getThings.then(function(got){
      
      //var tmppage=[];
      loopPage.forEach(function(v,k,array){
	 
//	   var tmppage=[];
          var mlist=got[v];
	 // console.log(mlist)
	  mlist.forEach(function(vi,ki,arri){
	      //console.log('dddd')
	      var tmppage=[];
	      mymap.forEach(function(mv,mk,marr){
		  if(mv.chu>1){
		      tmppage.push(vi[mv.zd]/mv.chu);
		  }else{
		      tmppage.push(vi[mv.zd]);
		  }
	      });
	     // console.log(tmppage,333333)
	      toexp.push(tmppage);  
	  });
	  
	  //toexp.push(tmppage);
      });


//console.log(toexp,888,78979)
      commit('download',{arg:arg,toData:toexp});

  },function(err){
      console.log(err)
  });

  

    
    
   
    
    
}




function getDataList(query,state,rootState,commit,arg,dispatch,looppage,getThings,last){

var url='/api/'+arg.type+'/dataList';

var out=[];

request
.get(rootState.default.reqUrl+url)
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
//.withCredentials()//跨域
.end(function(err,res){
    if(res.ok&&res.body.code==="00000"){
	var ndata =[]
	
	if(arg.type=='hh'||arg.type=='ds'){
	            res.body.data.list.list.forEach(function(v,k,array){
			ndata.push(v);

		    });

	}else{
	
	            res.body.data.list.forEach(function(v,k,array){
           ndata.push(v);

        });

	}
       
	getThings.keep(looppage,ndata )
	//resolve();
  }
});






}



function getMap(type,rootState){

    var ts= {
	'dd':rootState.module_dd.default.tabList,
	'ds':rootState.module_ds.default.tabList,
	'fc':rootState.module_fc.default.tabList,
	'fwz':rootState.module_fwz.default.tabList,
	'hh':rootState.module_hh.default.tabList,
	'sp':rootState.module_sp.default.tabList
    }


    return ts[type];


}
