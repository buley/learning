#!/bin/bash
echo "###"
echo "#"
echo "# This is a node.js (javascript) Hello World, "
echo "# a simple working example of how to execute some code. "
echo "#"
cat << 'EXAMPLE_SERVER' > /tmp/tldr_node_hello_world.js
console.log( 'The beginning of node.js', 'http://four.livejournal.com/943068.html' );
EXAMPLE_SERVER
echo "# We're going to create a new file called hello_world.js."
echo "# The contents of hello_world.js are displayed below."
echo "#"
echo "###"
echo ""
cat /tmp/tldr_node_hello_world.js
echo ""
echo "###"
echo "#"
echo "# The results of running hello_world.js ('node hello_world.js')"
echo "# are displayed below"
echo "#"
echo "###"
echo ""
node /tmp/tldr_node_hello_world.js
