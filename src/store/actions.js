var request = require("superagent");


var exportData=[];
var awaitme = require('await');

export const logout=({commit,state,rootState},arg)=>{

    rootState['module_dd'].default.firstInit=false

}



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
        if(res.ok){
        commit('filterLogin',{code:res.body.code});
    }


    if(res.ok&&res.body.code==="00000"){
   
	//rootState[arg.type].default.filter.type=2
	
	
	
	res.body.data.forEach(function(val,key,res){
	    
	    if(val.code==0){
		rootState.default.cityLimit=0
            }


	    if(first){
		if(!rootState[arg.type].default.firstInit){
		    rootState[arg.type].default.now.city=val.name
		}

		switch(arg.type){
		    case 'module_fwz':
		    case 'module_sp':
		   
		    
		    if(!rootState[arg.type].default.firstInit){
			rootState[arg.type].default.filter.cityCode=val.code
			rootState[arg.type].default.firstInit=true
		    }

		    break;

		    case 'module_dd':
		    
		    
		    
		    if(!rootState[arg.type].default.firstInit){
			
			if(rootState[arg.type].default.filter.type!=3){
			    rootState[arg.type].default.filter.type=2
			}

			

			
			rootState[arg.type].default.filter.cityCode=val.code
			rootState[arg.type].default.firstInit=true
		    }

		    if(rootState[arg.type].default.filter.cityCode==0){
			if(val.code==0){
                            rootState[arg.type].default.filter.type=1
			}
		     }

		    case 'module_hh':
		    case 'module_ds':
		    if(!rootState[arg.type].default.firstInit){
			
			rootState[arg.type].default.filter.cityName=val.name
			rootState[arg.type].default.firstInit=true
		    }
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
      
      
      loopPage.forEach(function(v,k,array){
	 

          var mlist=got[v];
	 
	  mlist.forEach(function(vi,ki,arri){
	      
	      var tmppage=[];
	      mymap.forEach(function(mv,mk,marr){
		  if(mv.chu>1){
		      tmppage.push(vi[mv.zd]/mv.chu);
		  }else{
		      tmppage.push(vi[mv.zd]);
		  }
	      });
	     
	      toexp.push(tmppage);  
	  });
	  
	  
      });

      

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

        if(res.ok){
        commit('filterLogin',{code:res.body.code});
    }


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

var rq={
    "name":"日期",
    "alias":"rq",
    "active":0,
    "zd":"date",
     "chu":1
};


console.log(rootState)

if(rootState.module_dd.default.filter.threeType=='city'){
 rq={
    "name":"城市",
    "alias":"cs",
    "active":0,
    "zd":"city_name",
     "chu":1
};

}else if(rootState.module_dd.default.filter.threeType=='detail'){
 rq={
    "name":"服务商",
    "alias":"fws",
    "active":0,
    "zd":"fws_name",
     "chu":1
};
}

var fwzarr=[];
var ddarr=[];
fwzarr.push(rq);
ddarr.push(rq);

rootState.module_fwz.default.tabList.forEach(function(val,key,arr){
    fwzarr.push(val);
});


rootState.module_dd.default.tabList.forEach(function(val,key,arr){
    ddarr.push(val);
});



    var ts= {
	'dd':ddarr,
	'ds':rootState.module_ds.default.tabList,
	'fc':rootState.module_fc.default.tabList,
	'fwz':fwzarr,
	'hh':rootState.module_hh.default.tabList,
	'sp':rootState.module_sp.default.tabList
    }



    return ts[type];


}
