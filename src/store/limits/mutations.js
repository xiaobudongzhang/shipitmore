

export const updateLimitList=(state,payload)=>{ 
    
    if(payload.dataList){        
	state.default.currentModule=payload.arg.currentModule;
	
	var name=state.default.prefixModule+'_'+state.default.currentModule;
	
	state.default.dataList[name]=payload.dataList;
    }

}

export const updateLeftMenus=(state,payload)=>{


}


export const initUserList=(state,payload)=>{
					    
    
    
    state.default.tableList.zhList=payload.dataList

}


export const updateCityQxList=(state,payload)=>{
   


    
    var dataObj={};
    
    payload.dataList.forEach(function(val,key,arr){
	val.valme="checked";
	dataObj[val.city_code]=val;
    });
    
    state.default.qxListObj[payload.userId]=dataObj
}

export const removeUserCity=(state,payload)=>{

    //state.default.qxList[payload.id]=[];
   
}


