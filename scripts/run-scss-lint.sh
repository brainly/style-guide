#!/usr/bin/env bash

# This script will run scss-lint

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run --rm \
  -v $PROJECT_DIR:/style-guide/ \
  brainly/style-guide scss-lint "$@"
