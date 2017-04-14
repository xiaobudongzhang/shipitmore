var request = require("superagent");

export const updateUserCityAll=({resolve,commit,state,rootState},arg)=>{

    updateUserCityAllData(state,rootState,commit,arg);

}



export const removeUserCity=({resolve,commit,state,rootState},arg)=>{



var query={'id':arg.id};

request
.get(rootState.default.reqUrl+'/api/limit/removeUserCity')
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){
    // Do something
      if(res.ok&&res.body.code==="00000"){
	  	  
          commit('removeUserCity',{arg:arg});
	  updateUserCitysListData(arg.userId,state,rootState,commit,arg);
      }
});
    

}


export const updateUserCitysListDataByUserId=({resolve,commit,state,rootState},arg)=>{




updateUserCitysListData(arg.userId,state,rootState,commit,arg);

}

export const updateUserCity=({commit,state,rootState},arg)=>{


var query={'userId':arg.userId,'cityCode':arg.cityCode,'cityName':arg.cityName};


return new Promise(resolve=>{

request
.get(rootState.default.reqUrl+'/api/limit/updateUserCity')
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){

    
    // Do something
      if(res.ok&&res.body.code==="00000"){

          //commit('updateUserCity',{arg:arg});
          updateUserCitysListData(arg.userId,state,rootState,commit,arg,resolve);
	  //resolve();
      }
});


});

}




export const initUserList=({resolve,commit,state,rootState},arg)=>{

var userLists=[]

return new Promise(resolve=>{
        initUserListData(state,rootState,commit,arg,resolve);
});

}


export const  initUserCitysList=({resolve,commit,state,rootState},arg)=>{

    initUserCitysListData(arg.userLists,state,rootState,commit,arg);

}


export const  updateUserCityAllOne=({resolve,commit,state,rootState},arg)=>{

    var status=0
    if(arg.all){
	status=1
    }
    
    var myarg={'userId':arg.userId,'cityCode':0,'cityName':'全部','status':status};

    updateUserCityAllDataB(state,rootState,commit,myarg);

}


function initUserListData(state,rootState,commit,arg,resolve){

request
.get(rootState.default.reqUrl+'/api/limit/getUserLists')
  //.query(query) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){
    // Do something
    
    if(res.ok){
        commit('filterLogin',{code:res.body.code});
    }

    if(res.ok&&res.body.code==="00000"){
          var userLists=[];
          res.body.data.forEach(function(val,key,array){
              userLists=res.body.data
          });


          commit('initUserList',{arg:arg,dataList:userLists});
	  
	  resolve(userLists);
          
      }
});


}


function initUserCitysListData(userLists,state,rootState,commit,arg){


userLists.forEach(function(v,k,arr){ 

var query={'userId':v.id};

request
.get(rootState.default.reqUrl+'/api/limit/getUserCityLists')
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){
     if(res.ok){
        commit('filterLogin',{code:res.body.code});
    }
    // Do something
      if(res.ok&&res.body.code==="00000"){
	  
	  var dataLists=[];
          res.body.data.forEach(function(val,key,array){
             dataLists.push(val);
          });
	  
          commit('updateCityQxList',{userId:v.id,arg:arg,dataList:dataLists});
      }
});

});



}




function updateUserCitysListData(userId,state,rootState,commit,arg,resolve){




var query={'userId':userId};

request
.get(rootState.default.reqUrl+'/api/limit/getUserCityLists')
.query(query) // query string
//.use(prefix) // Prefixes *only* this request
//.use(nocache) // Prevents caching of *only* this request
.end(function(err, res){
    
    if(res.ok){
        commit('filterLogin',{code:res.body.code});
    }
    // Do something
      if(res.ok&&res.body.code==="00000"){

          var dataLists=[];
          res.body.data.forEach(function(val,key,array){
             dataLists.push(val);
          });

          commit('updateCityQxList',{userId:userId,dataList:dataLists});
	 if(resolve){
	     resolve();
	  }
      }
});



}



function updateUserCityAllData(state,rootState,commit,arg){


var status=0
if(arg.checked){
    status=1
}

var myarg={'userId':arg.userId,'cityCode':0,'cityName':'全部','status':status};

updateUserCityAllDataB(state,rootState,commit,myarg);


state.default.citys_merge.forEach(function(val,key,arr){

    var myarg={'userId':arg.userId,'cityCode':val.code,'cityName':val.name,'status':status};

    updateUserCityAllDataB(state,rootState,commit,myarg);

});

}

function updateUserCityAllDataB(state,rootState,commit,myarg){

    var query={'userId':myarg.userId,'cityCode':myarg.cityCode,'cityName':myarg.cityName,'status':myarg.status};


    request
    .get(rootState.default.reqUrl+'/api/limit/updateUserCity')
    .query(query) // query string
    //.use(prefix) // Prefixes *only* this request
    //.use(nocache) // Prevents caching of *only* this request
    .end(function(err, res){
    // Do something
        if(res.ok&&res.body.code==="00000"){

            //commit('updateUserCity',{arg:arg});
            updateUserCitysListData(myarg.userId,state,rootState,commit,myarg);
        }
    });

}
