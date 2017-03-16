export const updatePage=(state,payload)=>{

    var type="module_"+payload.type;
    state[type].default.page.pages=[]
    
    if(payload.total>0&&payload.type!=undefined){

	
	state[type].default.page.totalPage=Math.ceil(payload.total/state[type].default.filter.pageNum);
        state[type].default.page.placeholder="输入跳转页码，共("+state[type].default.page.totalPage+"页)"
	
	
        var numShow=Math.min(state[type].default.page.pageListNum,state[type].default.page.totalPage)
        var newPage=[];
        for(var i=1;i<=numShow;i++){
               newPage.push(i);
        }
	
        state[type].default.page.pages=newPage
	return;
    }

    state[type].default.page.totalPage=0;
    state[type].default.page.placeholder=""
    state[type].default.page.preP=false
    state[type].default.page.nextP=false
}
