/* Example node-static server */

/* node-static makes it easy to serve static files such as HTML and CSS
 * over HTTP in just a few lines of code. Compare this file to the
 * node server  example, which does this manually located at:
 * ./programming_languages/javascript/node/example_server/ */  

/* This server uses node-static (install: 'sudo npm install node-static') 
 * to serves the contents of the example_website located in
 * ./programming_languages/javascript/browser/example_website/ */

var static = require('node-static');

var file = new(static.Server)( __dirname + '/../../../browser/example_website/');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(1234);
