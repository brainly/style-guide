#!/usr/bin/env bash
set -e

GIT_SHORT_COMMIT=${GIT_COMMIT:0:7}
PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)

export IMAGE_ARTIFACT=brainly/${JOB_NAME}:${BUILD_NUMBER}-${GIT_SHORT_COMMIT}

docker build -t $IMAGE_ARTIFACT .

docker run -t --rm \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/src:/style-guide/src \
  -v $PROJECT_DIR/gulpfile.js:/style-guide/gulpfile.js \
  brainly/style-guide node_modules/.bin/gulp build --production

docker push $IMAGE_ARTIFACT
