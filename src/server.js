var http = require('http');
var fs   = require('fs');

var server = http.createServer(handler);


function handler (request,response){
  var endpoint = request.url;

     if( endpoint === '/node' ){
       response.writeHead(200,{"Content-Type": "text/html"});
       response.write("<h1> We are in Node </h1>");
       response.end();


     }else if (endpoint ==='/girl'){

       response.writeHead(200,{"Content-Type": "text/html"});
       response.write("<h1> We are in girl </h1>");
       response.end();


     } else if (endpoint === '/'){
       response.writeHead(200, {"Content-Type": "text/html"});

       fs.readFile(__dirname + '/../public/index.html', function(error, file){
         console.log(error)
         if (error){
           return;
         }
         response.end(file);
       });

     }

     else {




  var method = request.method;
  console.log(endpoint);
  console.log(method);
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write("<h1> Ana sami mo 7ayala </h1>");
  response.end();

}
}

server.listen(3012, function() {
  console.log("Server is listening on port 3010. Ready to accept requests!");
});
