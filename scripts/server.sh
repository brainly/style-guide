#!/usr/bin/env bash

# This script will run the project in server mode for preview
# Note: We do not have the server yet, files are static and served as file://

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run -t --rm \
  -v $PROJECT_DIR/docs:/style-guide/docs \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp build

echo "Now you can open docs/basic.html file in your browser and see the styleguide"
