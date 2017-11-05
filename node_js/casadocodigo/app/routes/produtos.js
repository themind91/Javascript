
module.exports = function(app){
var pg = require('pg');
var PGUSER = 'postgres'
var PGDATABASE = 'casa_do_codigo'
var password = '**********';

var config = {
    user: PGUSER, // name of the user account
    database: PGDATABASE, // name of the database
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
    password:password
  }

var pool = new pg.Pool(config);
// configuring the routes

    app.get('/produtos',function(request,response){
        // connect into the database
        pool.connect(function(err,client,done){

            if(err)
                return console.log(' error to connect into the database ' + err) ;
            else
                return console.log(' connect sucessfully ');

        });

        
        //response.render("produtos/lista");
    });

}


