var http = require('http');
var fs = require('fs');
var pathToIndex = __dirname + '/index.html';

var requestListener = function(req, res){
   
    fs.open(pathToIndex,'r', function(err, fd){
	if(err){
	    
	}
	fs.fstat(fd, function(err, stats){
	    if(err){
	    }
	    var bufferSize = stats.size,
	        offset = 0,
                length = stats.size,
	        buffer = new Buffer(bufferSize);
	    fs.read(fd, buffer, offset, length, 0, function(err, bytesRead, buff){
		if(err){
		}
		res.end(buff);
	    });
	});
	
    });
}

var port = process.env.PORT || 8080;
var server = http.createServer(requestListener);
server.listen(port);
