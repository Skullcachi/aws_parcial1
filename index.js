var mysql = require("mysql");
var config = require("./config.json");

var pool = mysql.createPool({
    host     : config.json,
    user     : config.user,
    password : config.password,
    database : config.database,
});

exports.handler = (event, context, callback) => {
    context.callbackwaitsForEmptyEventLoop = false;
    pool.getConnection(function(err, connection)
    {
        //Use the connection
        connection.query("SELECT * FROM movies", function (error, results, fields){
            //Done with the connection
            connection.release();
    
            //Handle after the release
            if(error) callback(error);
            else callback(null, results[0]);
        });
    });

};