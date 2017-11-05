var app = require('./config/express')();
var routesOfProducts = require('./app/routes/produtos')(app);
// starting the server

app.listen(3000,function(){
    console.log(' the server is running ');
});