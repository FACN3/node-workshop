
var fs   = require('fs');
var querystring = require('querystring');

var handler=function(request,response){

  var endpoint = request.url;
  var allTheData = '';

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

     } else if (endpoint === '/create-post'){

       //response.redirect(request.get('referer'));
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});

request.on('end', function () {

   response.writeHead(302,{'Location': '/../public/index.html'})
    console.log(querystring.parse(allTheData));
    response.end();
});

     }

     else {

        type=endpoint.split('.')[1]
      console.log(type);
        if(type==='css'){

          response.writeHead(200, {"Content-Type": "text/css"});

          fs.readFile(__dirname + '/../public'+endpoint, function(error, file){
            console.log(error)
            if (error){
              return;
            }
            response.end(file);
          });


        }else if (type=='jpg'){
               console.log("da5al");
          response.writeHead(200, {"Content-Type": "image/jpeg"});

          fs.readFile(__dirname + '/../public'+endpoint, function(error, file){
            console.log(error)
            if (error){
              return;
            }
            response.end(file);
          });




        }



  //var method = request.method;
  //console.log(endpoint);
  //console.log(method);
  //response.writeHead(200,{"Content-Type": "text/html"});
  //response.write("<h1> Ana sami mo 7ayala </h1>");
  //response.end();

}

}


module.exports=handler;
