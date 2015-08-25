#!/usr/bin/env bash

# This script rebuilds icon fonts from svg sources
# It will generate the corresponding scss file

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run -t --rm \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp icons
