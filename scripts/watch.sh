#!/usr/bin/env bash

# This script will run the watch process for source compilation
# Useful for development

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run -t --rm \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp watch:docs watch:sass
