// criando um modelo para ser chamado e carregado

var express = require('express');
var app = express();
 // defining variables inside the express
 app.set('view engine','ejs');
 app.set('views','./app/views')
module.exports = function() {
    
   
    return app;
}


