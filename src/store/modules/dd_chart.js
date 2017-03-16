var request = require("superagent");

//订单统计chart
//this.$store.state.default.reqUrl+"/api/mock/dd?type=zdd"
var opt1={

        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
          type:'datetime',
          dateTimeLabelFormats: {
                              year: '%Y',
                              month: '%Y-%m',
                              day:'%m-%d'
           }
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            xDateFormat:'%m-%d',
            pointFormat:' {point.y}'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '  ',
            data:[]
        }],
        credits:{
            enabled:false // 禁用版权信息
        }
};


const state={
    filter:{
	region:'',
	fwzname:'',
	dateStart:'',
	dateEnd:''
    },
    chartList:[],
    opt1:opt1
}

const getters={

}



const mutations={
    updateByRegion(state,payload){
	state.filter.region=payload.pinyin
	
	if(payload){
	    state.opt1.series[0].data=payload.list
	 }

    }

}


const actions ={
    updateByRegion({commit,state},arg){
console.log(state)   
   let chartList=[];
   request
  .get('http://192.168.1.38:8018/api/mock/dd')
  //.query({ action: 'edit', city: 'London' }) // query string
  //.use(prefix) // Prefixes *only* this request
  //.use(nocache) // Prevents caching of *only* this request
  .end(function(err, res){
    // Do something
      if(res.ok&&res.body.code==="00000"){
	  res.body.data.forEach(function(val,key,array){
	      var date=new Date(val.date).getTime();
	      chartList.push([date,val.count]);
	  });
      }
//      chartList=res.body
      //console.log(chartList[0])
  });
	
	commit('updateByRegion',{list:chartList,pinyin:arg.pinyin});
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}
