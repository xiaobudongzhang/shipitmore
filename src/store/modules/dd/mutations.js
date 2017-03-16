
export const  updateByRegionOfDd=(state,payload)=>{
    
       var chartType=state.default.filter.type;
       
       if(payload.arg){
          state.default.filter.region=payload.arg.pinyin
       }

       
        if(payload.list){
	   var mlist=state.default.chartList[chartType];
	    if(mlist){
		mlist.series[0].data=payload.list
	    }
         }

}

export const updateByFwsOfDd=(state,payload)=>{
        var chartType=state.default.filter.type

        if(payload.arg){
            state.default.filter.fwsName=payload.arg.fwsName
        }

        if(payload.list){

           var mlist=state.default.chartList[chartType];
            if(mlist){
                mlist.series[0].data=payload.list
            }
         }

}


export const updateByTypeOfDd=(state,payload)=>{
        
        if(payload.arg){
           state.default.filter.type=payload.arg.chartType
        }
    
        if(payload.list){
           var mlist=state.default.chartList[payload.arg.chartType];
            if(mlist){
                mlist.series[0].data=payload.list
            }
         }

}


export const updateByDateOfDd=(state,payload)=>{
    if(payload.arg){
	state.default.filter.dateStart=payload.arg.startDate
	state.default.filter.dateEnd  =payload.arg.endDate
    }
    
    var chartType=state.default.filter.type
    if(payload.list){
	
	    var mlist=state.default.chartList[chartType];
	    if(mlist){
                mlist.series[0].data=payload.list
            }
	
    }
}

export const updateTableOfDd=(state,payload)=>{

   if(payload.arg){
        if(payload.arg.page){
            state.default.filter.page=payload.arg.page
        }
        if(payload.arg.threeType){
            state.default.filter.threeType=payload.arg.threeType
        }
    }

    
    if(payload.list){
	var name=payload.type+"List"
	state.default.tableList[name]=payload.list
    }
}

export const initTableOfDd=(state,payload)=>{

   if(payload.arg){
        if(payload.arg.page){
            state.default.filter.page=payload.arg.page
        }
        if(payload.arg.threeType){
            state.default.filter.threeType=payload.arg.threeType
        }
    }


    if(payload.firstList){
        state.default.tableList.trtotal=payload.firstList.length
	state.default.tableList.firstList=payload.firstList

	state.default.tabList.forEach(function(val,key,array){
	    
	    payload.firstList.forEach(function(v,k,arr){
		 state.default.tableList[val.alias+"List"][k]={count:''};
	    });
	});
	
    }
}


export const updateTableFirstColumnOfDd=(state,payload)=>{

    
   if(payload.arg){
        if(payload.arg.page){
            state.default.filter.page=payload.arg.page
        }
        if(payload.arg.threeType){
            state.default.filter.threeType=payload.arg.threeType
        }
    }

    if(payload.list){
        state.default.tableList.firstList=payload.list
    }
}
