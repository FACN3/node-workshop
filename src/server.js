var http = require('http');

var server = http.createServer();

server.listen(3010, function() {
  console.log("Server is listening on port 3010. Ready to accept requests!");
});
