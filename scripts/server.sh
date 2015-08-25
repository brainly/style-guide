#!/usr/bin/env bash

# This script will run the project in server mode for preview
# Note: We do not have the server yet, files are static and served as file://

DIR=`pwd`

docker run -t --rm \
  -v $DIR/docs:/style-guide/docs \
  -v $DIR/src:/style-guide/src \
  -v $DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp sass:docs

echo "Now you can open docs/basic.html file in your browser and see the styleguide"
