var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'shipit'
});
 

connection.connect();

module.exports = function(app){

    


    app.get('/test', function (req, res) {

	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  res.send('The solution is: ', results[0].solution);
});
 
connection.end();


	

    })



    app.get('/deploy/work', function (req, res) {


    //log
    var cmdStr = 'cd .. && shipit work deploy';

    let child=exec(cmdStr,{async: true},function(err,stdout,stderr){

    })

    child.stdout.on('data', function (data) {
        res.write(data)

    })

    })


}
