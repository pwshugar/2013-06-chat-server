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

  var statusCode = 200;

  // var result = [];

      if (request.method === 'POST') {
          var body = '';
          request.on('data', function (data) {
              body += data;
          });
          request.on('end', function () {

          var key = JSON.parse(Object.keys(qs.parse(body)));
          result.push(key);
          console.log(result);
          // console.log(data);
          // data.splice(0,1);
          // var keys = Object.keys(data[0]);
          // console.log(keys);
          });
      }


  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);


  response.end(JSON.stringify(result));
};
