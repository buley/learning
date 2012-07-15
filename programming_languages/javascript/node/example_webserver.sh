#!/bin/bash

# Talk about what this file does
echo "###"
echo "#"
echo "# This is a node.js (javascript) example webserver."
echo "# It will create and run a webserver (server.js) that responds on port 1234,"
echo "# (which is not default port for HTTP requests from the browser,"
echo "# so you'll have to specify :1234 in the URL for browsers)."
echo "#"
echo "# To view the result of running this server, open a browser window"
echo "# and navigate to http://127.0.0.1:1234/"
echo "# (localhost port :1234)"
echo "#"
echo "# The contents of server.js are displayed below."
echo "#"
echo "###"
echo ""

# Create the webserver in /tmp by echoing heredoc
cat << 'EXAMPLE_SERVER' > /tmp/tldr_node_example_server.js
/* server example via http://nodejs.org/ */
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1234, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1234/');
EXAMPLE_SERVER

# Display server.js contents
cat /tmp/tldr_node_example_server.js

# Talk about running the file
echo ""
echo "###"
echo "#"
echo "# The results of running running.js ('node server.js')"
echo "# are displayed below"
echo "#"
echo "# Note that this webserver will run until you kill it off"
echo "# with Ctrl+C"
echo "#"
echo "###"
echo ""

# Run the file
node /tmp/tldr_node_example_server.js
