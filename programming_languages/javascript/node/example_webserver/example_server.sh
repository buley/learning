#!/bin/bash

# Talk about what this file does
echo "###"
echo "#"
echo "# This is a (javascript-) node.js-powered example webserver."
echo "# It runs a webserver (located at example_website/server.js)"
echo "# and responds on port 80 (the default port for HTTP requests from the browser)."
echo "#"
echo "# This server serves up the contents of the website located in /programming_languges/javascript/browser/example_website/:"
echo "# * /programming_languges/javascript/browser/example_website/index.html"
echo "# * /programming_languges/javascript/browser/example_website/scripts/script.js"
echo "# * /programming_languges/javascript/browser/example_website/stylesheets/style.css"
echo "#"
echo "# Together, the above files are enough to make a basic website. If you want"
echo "# to add more assets or a more complex server you should look into the node-static"
echo "# and express example servers and websites."
echo "#"
echo "# To view the result of running this server, open a browser window"
echo "# and navigate to http://127.0.0.1:1234/"
echo "# (localhost port :1234)"
echo "#"
echo "# The contents of server.js are displayed below."
echo "#"
echo "###"
echo ""

# Display server.js contents
cat server.js

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
node server.js
