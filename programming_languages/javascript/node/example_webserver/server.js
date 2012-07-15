/* Dependencies */

var fs = require('fs')
, http = require('http');

/* Load HTML File */

var load_html = function( callback ) {
	fs.readFile(__dirname + '/../../browser/example_website/index.html', 'ascii', function(err,data){
		if(err) {
			console.error("Could not open %s", err);
			process.exit(1);
		}
		if ('function' === typeof callback) {
			callback(data);
		}
	});
};

/* Load CSS File */

var load_css = function( html, callback ) {
	fs.readFile(__dirname + '/../../browser/example_website/stylesheets/style.css', 'ascii', function(err,data){
		if(err) {
			console.error("Could not open %s", err);
			process.exit(1);
		}
		if ('function' === typeof callback) {
			callback(html, data);
		}
	});
};

/* Load JavaScript File */

var load_javascript = function( html, css, callback ) {
	fs.readFile(__dirname + '/../../browser/example_website/scripts/script.js', 'ascii', function(err,data){
		if(err) {
			console.error("Could not open %s", err);
			process.exit(1);
		}
		if ('function' === typeof callback) {
			callback( html, css, data);
		}
	});
};

/* Run Server */

var run_server = function( html, css, javascript, callback ) {

	var server = http.createServer(function (req, res) {

		var headers =  {'Content-Type': 'text/plain'}
		, response_code = 404
		, response = '';

		if ('/' === req.url || '/index.html' === req.url) {
			headers = {'Content-Type': 'text/html'};
			response_code = 200;
			response = html;
		} else if ('/scripts/script.js' === req.url) {
			headers = {'Content-Type': 'text/script'};
			response_code = 200;
			response = javascript;
		} else if ('/stylesheets/style.css' === req.url) {
			headers = {'Content-Type': 'text/css'};
			response_code = 200;
			response = css;
		}

		res.writeHead(response_code, headers);
		res.end(response);	

	}).listen( 1234, '127.0.0.1');

	if ('function' === typeof callback) {
		callback( server ); 
	}

};

/* Do Everything */

load_html( function( html ) {
	load_css( html, function( html, css ) {
		load_javascript( html, css, function( html, css, javascript ) {
			console.log( 'Loaded static assets into memory...\nNow running webserver on port :1234 to serve them up.' );
			run_server( html, css, javascript, function(server) {
				console.log( 'Server running at http://127.0.0.1:1234/' );
			} );
		});
	});
});


