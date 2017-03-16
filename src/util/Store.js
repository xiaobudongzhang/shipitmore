const PRE = 'tz_vue_';
// var fs = require('fs')
export default{
  lfetch(k){
    k=PRE+k
    var items = window.localStorage.getItem(k) || "{}";
    // console.log(items)
    return JSON.parse(items);
  },
  lsave(k, v){
    k=PRE+k
    return window.localStorage.setItem(k, JSON.stringify(v));
  },
  fget(k){

  },
  cl(){
    // console.log('ff')
    // console.log(arguments)
    for(let i=0;i<arguments.length;i++) {
      console.log(arguments[i])
    }
    // arguments.forEach((arg)=>{
    //   console.log(arg)
    // })

  },
  getUrl(ctl,type,op){
    // switch (type) {
    //   case ''
    //     break;
    // }
    op = op || 'index';
    // let pre='http://localhost:8080/user_center/admin.php'
    let pre='http://app.tuzuu.com/wxa/wx36s'
    let url =`${pre}/admin.php?s=/${ctl}/${op}/token/9a33ed3de10be659617aaec29a8e26cf/is_vue/1/${type}/1`
    return url;
  },
  RS_OK:1

}
