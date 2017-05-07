var  express = require('express')
var app = express()
var ip = require('ip')
var exec = require('child_process').exec;


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/deploy', function (req, res) {
    
    var cmdStr = 'shipit default deploy';
    
    exec(cmdStr,function(err,stdout,stderr){
	console.log('hhhh')
	console.log(stdout)
    })

res.send('Hello World222')
})


app.listen(8020)
