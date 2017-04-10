
export const updateTableOfFc=(state,payload)=>{


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

export const initTableOfFc=(state,payload)=>{

    
   if(payload.total>0&&payload.hasMore){
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




export const updateFilterOfFc=(state,payload)=>{
   
    
    if(payload.arg){
	if(payload.arg.region){
	    state.default.filter.page=1
	    state.default.filter.region=payload.arg.region
	}
	
	if(payload.arg.typeAlias){
	    
	    /*if(payload.arg.typeAlias=='fwz'){
		state.default.tabList[2].name="服务者名称"
	    }else if(payload.arg.typeAlias=='gys'){
		state.default.tabList[2].name="供应商名称"
	    }else{
	    */
		state.default.tabList[2].name="服务商名称"
	    //}

            state.default.filter.typeAlias=payload.arg.typeAlias
        }
	
	if(payload.arg.dataType){

	    if(payload.arg.dataType=='wc'){
		state.default.filter.dateStartWc=state.default.date.start
		state.default.filter.dateEndWc=state.default.date.end
		
		state.default.filter.dateStart=''
		state.default.filter.dateEnd=''
	    }else {
		state.default.filter.dateStartWc=''
                state.default.filter.dateEndWc=''

                state.default.filter.dateStart=state.default.date.start
                state.default.filter.dateEnd=state.default.date.end

	    }

        }
	
	if(payload.arg.searchVal||payload.arg.searchVal==''){
	    if(payload.arg.searchVal){

		var xx=''
	    if(state.default.filter.typeAlias=='fwz'){
                xx="服务者"
            }else if(state.default.filter.typeAlias=='gys'){
                xx="供应商"
            }else{
                xx="服务商"
            }


		state.default.mingxi=xx+" "+payload.arg.searchVal+" 分成数据明细"
	    }else{
		 state.default.mingxi=""
	    }
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
