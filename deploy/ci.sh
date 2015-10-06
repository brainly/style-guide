#!/bin/bash
set -e

REGISTRY="registry.prod01.internal.eve-brainly.com:5000"

export IMAGE_ARTIFACT=${REGISTRY}/${JOB_NAME}:${BUILD_NUMBER}-${GIT_SHORT_COMMIT}
export PROJECT_DIR=$(pwd)

echo "IMAGE_ARTIFACT=$IMAGE_ARTIFACT"

./scripts/cibuild.sh

docker run -t --rm \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/s3_website.yml:/style-guide/s3_website.yml \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  $IMAGE_ARTIFACT s3_website push
