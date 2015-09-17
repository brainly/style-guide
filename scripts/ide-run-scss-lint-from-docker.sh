#!/usr/bin/env bash

# This script will run scss-lint

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run --rm \
  -v $PROJECT_DIR:/style-guide \
  brainly/style-guide bash -c "scss-lint /style-guide/$1 -f JSON | sed 's/\/style-guide\///g'"
