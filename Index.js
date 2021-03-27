var http = require('http');
var cal = require('./Cal.js');

http.createServer(function (request,respose){
    respose.writeHead(200,{'Content-Type':'text/html'});

    var tong = cal.tinhTong(5,1);

    respose.end('Hello World!' + tong);
}).listen(8082);