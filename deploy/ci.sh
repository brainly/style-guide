#!/bin/bash
set -e

./scripts/cibuild.sh

docker run -t --rm \
  -v $PROJECT_DIR/dist:/style-guide/dist \
  -v $PROJECT_DIR/s3_website.yml:/style-guide/s3_website.yml \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  $IMAGE_ARTIFACT s3_website push
