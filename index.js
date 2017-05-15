var  express = require('express')
var app = express()
var ip = require('ip')
var exec = require('child_process').exec;


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/deploy/work', function (req, res) {
    
    
    //log
    var cmdStr = 'shipit work deploy';
    
    let child=exec(cmdStr,{async: true},function(err,stdout,stderr){
	
    })
    
    child.stdout.on('data', function (data) { 
	res.write(data)
   
    }) 
   
})


app.listen(8090)
