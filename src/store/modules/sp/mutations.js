export const  updateByRegionOfSp=(state,payload)=>{

       var chartType=state.default.filter.type;

       if(payload.arg){
	    if(payload.arg.type=='province'){
              state.default.filter.province_code=payload.arg.province_code
           }else{
               state.default.filter.city_code=payload.arg.city_code
           }

	   
          state.default.filter.region=payload.arg.cityCode
       }
      
}


export const updateTableOfSp=(state,payload)=>{

        if(payload.total){
         state.default.page.total=payload.total
    }


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

export const initTableOfSp=(state,payload)=>{

    
   if(payload.total>0){
       state.default.page.total=payload.total
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




export const updateFilterOfSp=(state,payload)=>{
   
    if(payload.arg){
	if(payload.arg.region){
	    state.default.filter.region=payload.arg.region
	}
	
	if(payload.arg.typeAlias){
            state.default.filter.typeAlias=payload.arg.typeAlias
        }

	if(payload.arg.searchVal){
            state.default.filter.searchVal=payload.arg.searchVal
        }else if(payload.arg.searchVal=='' ||payload.arg.searchVal==" "){
	    state.default.filter.searchVal =''
	}
	 
    }
}



export const updateByDateOfSp=(state,payload)=>{
   
    if(payload.arg){
        if(payload.arg.startDate){
            state.default.filter.dateStart=payload.arg.startDate
        }

        if(payload.arg.endDate){
            state.default.filter.dateEnd=payload.arg.endDate
        }

    }

}






