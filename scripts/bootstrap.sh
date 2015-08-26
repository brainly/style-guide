#!/usr/bin/env bash
set -e

# This script creates an initial setup for the project

echo "Hello, Master!"
echo "How are you today?"
echo "I will build the environment for style-guide project for you!"
echo

docker build -t brainly/style-guide .

echo
echo "Whew, done!"
echo "Now you can run server.sh to serve the project"
echo "Also, you can run watch.sh to make the build system watch changes in sources"
echo
echo "Have a nice hacking!"
