#!/usr/bin/env bash

# This script rebuilds icon fonts from svg sources
# It will generate the corresponding scss file

DIR=`pwd`

docker run -t --rm \
  -v $DIR/src:/style-guide/src \
  -v $DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp icons
