#!/bin/bash
set -e

./scripts/cibuild.sh

PROJECT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd)
IMAGE_ARTIFACT=brainly/${JOB_NAME}:${BUILD_NUMBER}-${GIT_SHORT_COMMIT}

docker run -t --rm \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/s3_website.yml:/style-guide/s3_website.yml \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  $IMAGE_ARTIFACT s3_website push
