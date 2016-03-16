#!/usr/bin/env bash

# This script will run the project in server mode for preview
# Note: We do not have the server yet, files are static and served as file://

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

docker run -t --rm \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/scripts:/style-guide/scripts \
  -v $PROJECT_DIR/package.json:/style-guide/package.json \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp build

echo "You can now open http://your_docker_ip:8181/dev/docs in web browser"

docker run -t --rm \
  -p 8181:8000 \
  --name brainly-style-guide-server \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  brainly/style-guide http-server ./dist -p 8000


# this will be executed when user hit CTRL+C
echo
echo "Please, bear with me while I am stopping and removing container..."
docker stop brainly-style-guide-server
docker rm brainly-style-guide-server
