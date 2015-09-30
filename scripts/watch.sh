#!/usr/bin/env bash

# This script will run the watch process for source compilation
# Useful for development

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run -t --rm --name brainly-style-guide-watch \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/scripts:/style-guide/scripts \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp watch

# this will be executed when user hit CTRL+C
echo
echo "Please, bear with me while I am stopping and removing container..."
docker stop brainly-style-guide-watch
docker rm brainly-style-guide-watch
