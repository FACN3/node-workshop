http= require('http');
handler=require('./src/handler')
console.log(handler);

var server= http.createServer(handler);

server.listen(3027,function(error){
  console.log("logged in");
});
