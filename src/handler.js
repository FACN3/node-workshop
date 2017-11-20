fs = require('fs');
var querystring = require('querystring');
files = ['css', 'png', 'img','js','ico'];
 var data_sami = ' ';
var posts= require('./posts');


var handler = function(request, response) {

    var endpoint = request.url;

    if (endpoint === '/') {

      fs.readFile(__dirname + '/../public/index.html', function(error, data) {

        if (error) {
          response.end("Error");
        } else {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
          response.end(data);
          //    response.end();

        }

      });


    } else if (files.includes(endpoint.split('.')[1])) {
            console.log(endpoint.split('.')[1]);
      var contentType = {
        'png': 'image/png',
        'css': 'text/css',
        'js': 'application/javascript'
      }[endpoint.split('.')[1]];

      fs.readFile(__dirname + '/../public' + endpoint, function(error, data) {

        if (error) {
          response.end("Error");
        } else {
          response.writeHead(200, {
            "Content-Type": contentType
          });
          response.end(data);
          //    response.end();
        }
      });


    } else if(endpoint=== '/create/post' ){

     request.on('data', function(senddata){
       var sent =senddata.toString('utf8');

      query= sent.slice(sent.indexOf('=')+1);
      // console.log(JSON.parse(senddata));
       console.log(senddata.constructor);

     var blog =querystring.parse(senddata);
       console.log("Object query:",blog);
       console.log(querystring.parse(senddata));
     var d = new Date();
      var n = d.getTime();
      posts[n]=query;
      data_sami += senddata;
    });

       request.on('end',function(){
      //   console.log(data_sami);
         response.writeHead(302, {'Location': "/"});
         response.end();
       });

    }else if(endpoint==='/posts'){
      //request.responseType = 'json';

       console.log("eja hoon!");
       console.log(posts);
       response.writeHead(200,{'Content-Type':'application/json'})
       response.end(JSON.stringify(posts));


    }



    else{
    console.log(endpoint);

      response.end("404 NOUT FOUND ");
    }
}
    module.exports = handler;
