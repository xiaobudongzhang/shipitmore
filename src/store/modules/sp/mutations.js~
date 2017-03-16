
export const updateTableOfFc=(state,payload)=>{

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

export const initTableOfFc=(state,payload)=>{

    
   if(payload.total>0&&payload.hasMore){
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




export const updateFilterOfFc=(state,payload)=>{
   
    if(payload.arg){
	if(payload.arg.region){
	    state.default.filter.region=payload.arg.region
	}
	
	if(payload.arg.typeAlias){
            state.default.filter.typeAlias=payload.arg.typeAlias
        }

	if(payload.arg.searchVal){
            state.default.filter.searchVal=payload.arg.searchVal
        }
	
    }
}



export const updateByDateOfFc=(state,payload)=>{
   
    if(payload.arg){
        if(payload.arg.startDate){
            state.default.filter.dateStart=payload.arg.startDate
        }

        if(payload.arg.endDate){
            state.default.filter.dateEnd=payload.arg.endDate
        }

    }

}


export const updatePageOfFc=(state,payload)=>{

     state.default.page.pages=[] 
    if(payload.total>0&&payload.hasMore){
	

        state.default.page.totalPage=Math.ceil(payload.total/state.default.filter.pageNum);
	 state.default.page.placeholder="输入跳转页码，共("+state.default.page.totalPage+"页)"
        var numShow=Math.min(state.default.filter.pageNum,state.default.page.totalPage)
	var newPage=[];
	for(var i=1;i<=numShow;i++){
	       newPage.push(i);
	}

	 state.default.page.pages=newPage
	 
    }
}
