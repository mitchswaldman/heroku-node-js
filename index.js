var http = require('http');
var fs = require('fs');
var requestListener = function(req, res){
    fs.readFile('/home/ubuntu/fundstarter/index.html', 'utf8', function(err, data){
	if(err){
	    res.writeHead(500);
	    res.end('No file found.');
	}
	res.writeHead(200);
	res.end(data);
    });
}

var port = process.env.PORT || 8080;
var server = http.createServer(requestListener);
server.listen(port);
