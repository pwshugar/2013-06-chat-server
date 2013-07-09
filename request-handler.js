/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
// var url = require("url");

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var result = [];

exports.handleRequest = function(request, response) {
  // var pathname = url.parse(request.url).pathname;
  console.log("Serving request type " + request.method + " for url " + request.url);

  var qs = require('querystring');

  var statusCode;


  if (request.method === 'POST') {
    statusCode = 302;
    var body = '';
    request.on('data', function (data) {
      body += data;
    });
    request.on('end', function () {
    result.push(qs.parse(body)); //use JSON.parse for chat client.
    });
  } else {
    if(request.url !== 'http://127.0.0.1:8080/classes/messages' && request.url !== 'http://127.0.0.1:8080/classes/room1'){
      statusCode = 404;
      console.log('the url',request.url);
      console.log('Does url !== message', request.url !== 'http://127.0.0.1:8080/classes/messages');
      console.log('Does url !== room1', request.url !== 'http://127.0.0.1:8080/classes/room1');
    } else {
      statusCode = 200;
    }
  }



  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);

  console.log("this is result",JSON.stringify(result));
  response.end(JSON.stringify(result));
};
