var dateFormat = require('dateformat');
var VueCookie = require('vue-cookie');

export const  download=(state,payload)=>{


var data = payload.toData;//[['asdfasdfasdfasd', 'sdadfasdf', 'ddd', "sheetjs"],["foo","bar",new Date("2014-02-19T14:30Z"), "0.3"], [4, 1,2,3]]


var date = new Date();
var now=dateFormat(date,"yyyy-mm-dd'T'HH:MM:ss");
var mname=payload.arg.name+now
var ws_name = payload.arg.name;


var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);
 //console.log(ws)
/* add worksheet to workbook */
wb.SheetNames.push(ws_name);
wb.Sheets[ws_name] = ws;
var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});


      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), mname+".xlsx")

}


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
	

       state[type].default.page.nextP=state[type].default.page.pageListNum<state[type].default.page.totalPage

	return;
    }
    
    state[type].default.page.totalPage=0;
    state[type].default.page.placeholder=""
    state[type].default.page.preP=false
    state[type].default.page.nextP=false
    
}


export const filterLogin=(state,payload)=>{
  
    var jump=false;
    if(payload.code=="50555"){
	jump=true;
    }


    if(payload.status&&payload.status==500){
	jump=true;
    }

    if(jump){
	VueCookie.delete('txy_name');
        VueCookie.delete('txy_token');
        VueCookie.delete('cookieLogin');

        window.location.href="/!#/login"
    }
}


export const resetSearchPage=(state,payload)=>{
    
   state["module_"+payload.arg.type].default.filter.page=1;
}
