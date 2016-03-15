var http = require('http');
var fs = require('fs');
var pathToIndex = __dirname + '/index.html';
var buf = fs.readFileSync(pathToIndex, 'utf8');
var requestListener = function(req, res){
    res.writeHead(200, {"Content-type":"text/html"});
    res.end(buf);
}

var port = process.env.PORT || 8080;
var server = http.createServer(requestListener);
server.listen(port);
