






export const  updateByRegionOfDd=(state,payload)=>{
    
     state.default.now.search=''
      state.default.filter.fwsName=''
       var chartType=state.default.filter.chartType;
       
       
       
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
           state.default.filter.chartType=payload.arg.chartType
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
	
	if(payload.arg.startDate){
	    
	state.default.filter.dateStart=payload.arg.startDate
	}
	if(payload.arg.endDate)
	state.default.filter.dateEnd  =payload.arg.endDate
    }
    
    var chartType=state.default.filter.chartType
   
    if(payload.list){
	
	    var mlist=state.default.chartList[chartType];
	
	    if(mlist){
                mlist.series[0].data=payload.list
            }
	
    }
}

export const updateTableOfDd=(state,payload)=>{

    if(payload.total){
	 state.default.page.total=payload.total
    }
   if(payload.arg){
        
       
        if(payload.arg.page){
            state.default.filter.page=payload.arg.page
        }
        if(payload.arg.threeType){
            state.default.filter.threeType=payload.arg.threeType
        }
    }

    
    if(payload.list){
	state.default.tableList.trtotal=payload.list.length

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

	    

	    if(state.default.filter.threeType=='country'){
		
		state.default.commons.firstThName="日期"
                 state.default.filter.type=1
            }else if(state.default.filter.threeType=='city'){
		state.default.commons.firstThName="城市"
		if(state.default.filter.type!=3)
		state.default.filter.type=2
            }else{
		state.default.commons.firstThName="服务商"
		 state.default.filter.type=3
            }


        }
    }

    if(payload.total>0){
	 state.default.page.total=payload.total
        state.default.page.totalPage=Math.ceil(payload.total/state.default.filter.pageNum);
    }


    if(payload.firstList){
        state.default.tableList.trtotal=payload.firstList.length
	state.default.tableList.firstList=payload.firstList

	state.default.tabList.forEach(function(val,key,array){
	    
	    payload.firstList.forEach(function(v,k,arr){
	        state.default.tableList["tmpList"][k]={count:'',val:''};
		state.default.tableList[val.alias+"List"][k]={count:''};
	    });
	});
	
    }
    
}

export const updateChart=(state,payload)=>{

        var chartType=state.default.filter.chartType;

       
        if(payload.list){

           var mlist=state.default.chartList[chartType];

            if(mlist){
                mlist.series[0].data=payload.list
            }
         }



}



export const updateXq=(state,payload)=>{


    if(state.default.filter.threeType=='country'){
	//日期
	state.default.filter.dateStart=payload.arg.val;
	state.default.filter.dateEnd=payload.arg.val;
	
	state.default.filter.type=1
	//state.default.date.start=payload.arg.val;
	//state.default.date.end=payload.arg.val;
    }else if(state.default.filter.threeType=='city'){
	state.default.filter.cityCode=payload.arg.val
	state.default.now.city_detail=payload.arg.val2

	 state.default.filter.page=1 

	state.default.filter.type=2
//	console.log(state.default.filter.type)
    }else {
	state.default.filter.page=1
	state.default.filter.type=3
    }


   

}

//returnme
export const returnme=(state,payload)=>{

    if(state.default.date.start=="开始日期"){
	state.default.filter.dateStart=""
    }else{
	state.default.filter.dateStart=state.default.date.start
	}

    if(state.default.date.end=="结束日期"){
	state.default.filter.dateEnd=""
    }else{
	 state.default.filter.dateEnd=state.default.date.end
    }


    
        state.default.filter.type = 1
	state.default.filter.cityCode=-1
        //日期

    

}

export const returnmedetail=(state,payload)=>{


        
        state.default.filter.type = 2
        state.default.filter.cityCode=-1
        //日期



}

export const updateFilterOfDd=(state,payload)=>{

if(payload.arg){
      
    if(payload.arg.mytype){
	
	if(payload.arg.mytype=='search'){
	     state.default.filter.cityCode=0
	    state.default.now.city='全部'

	    if(payload.arg.fwsName){
		

                 state.default.filter.type=3
                 state.default.filter.fwsName=payload.arg.fwsName
             }else if(payload.arg.fwsName==''){
                // state.default.filter.type=1
                 state.default.filter.fwsName=''
             }



	}else if(payload.arg.mytype=='region'){
	    state.default.filter.fwsName=''
	    state.default.now.search=''
 
	    if( state.default.filter.type== 3){
	    
	    }else{
		if(payload.arg.code>0){

                     state.default.filter.type=2
                     state.default.filter.cityCode = payload.arg.code
		}else {
                     state.default.filter.type=1
                     state.default.filter.cityCode = 0
		}
	    }
	
	}


	    
   }
	
    
}

    
}
