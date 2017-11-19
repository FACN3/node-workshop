var http = require('http');

var server = http.createServer(handler);


function handler (request,response){

  response.writeHead(200,{"Content-Type": "text/html"});
  response.write("<h1> Ana sami mo 7ayala </h1>");
  response.end();
}

server.listen(3010, function() {
  console.log("Server is listening on port 3010. Ready to accept requests!");
});
