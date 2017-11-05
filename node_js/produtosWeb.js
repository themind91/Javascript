var http = require('http');

var server = http.createServer(function(req,resp){

    resp.end('<html><body><h3>Hello Node</h3></body></html>');

}).listen(3000);

console.log(' the Server is running');