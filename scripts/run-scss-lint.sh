#!/usr/bin/env bash

# This script will run scss-lint

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run --rm \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/scripts:/style-guide/scripts \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide gulp scss-lint
