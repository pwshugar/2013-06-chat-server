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

exports.handleRequest = function(request, response) {
  // var pathname = url.parse(request.url).pathname;
  console.log("Serving request type " + request.method + " for url " + request.url);


  var statusCode;
  if (request.method === 'POST'){
    statusCode = 302;
  } else {
    statusCode = 200;
  }

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);

  var data = [{
    username: "Jono",
    message: "Do my bidding!"
  }];


  response.end(JSON.stringify(data));
};
