
export const updateTableOfHh=(state,payload)=>{

   if(payload.arg){
        if(payload.arg.page){
            state.default.filter.page=payload.arg.page
        }
        
    }

    
    if(payload.list){
	 state.default.tableList.trtotal=payload.list.length
	var name=payload.type+"List"
	state.default.tableList[name]=payload.list
    }
}

export const initTableOfHh=(state,payload)=>{
    
      if(payload.total>0){
        state.default.page.totalPage=Math.ceil(payload.total/state.default.filter.pageNum);
    }


    if(payload.firstList){
        state.default.tableList.trtotal=payload.firstList.length
	

	state.default.tabList.forEach(function(val,key,array){
	    
	    payload.firstList.forEach(function(v,k,arr){
		 state.default.tableList[val.alias+"List"][k]={count:''};
	    });
	});
	
    }
}


export const updateFilterOfHh=(state,payload)=>{
   
    if(payload.arg){
	           if(payload.arg.type=='province'){
              state.default.filter.province_code=payload.arg.province_code
           }else{
               state.default.filter.city_code=payload.arg.city_code
           }

	if(payload.arg.cityName||payload.arg.cityName==""){
	    if(payload.arg.cityName=='请选择'){
		payload.arg.cityName=''
	    }
	    state.default.filter.cityName=payload.arg.cityName
	}
	
	if(payload.arg.fwzName){
            state.default.filter.fwsName=payload.arg.fwzName
        }
	
	

    }
}



export const updateByDateOfHh=(state,payload)=>{

    if(payload.arg){
        if(payload.arg.startDate){
            state.default.filter.dateStart=payload.arg.startDate
        }

        if(payload.arg.endDate){
            state.default.filter.dateEnd=payload.arg.endDate
        }



    }
}



