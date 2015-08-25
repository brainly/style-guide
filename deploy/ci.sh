#!/bin/bash
set -e

GIT_SHORT_COMMIT=${GIT_COMMIT:0:7}
export IMAGE_ARTIFACT=brainly/${JOB_NAME}:${BUILD_NUMBER}-${GIT_SHORT_COMMIT}

docker build -t $IMAGE_ARTIFACT .
docker push $IMAGE_ARTIFACT

# build stuff

docker run -t --rm \
  -v ${pwd}/src:/style-guide/src \
  -v ${pwd}/gulpfile.js:/style-guide/gulpfile.js \
  -v ${pwd}/dist:/style-guide/dist \
  -v ${pwd}/docs:/style-guide/docs \
  brainly/style-guide gulp sass:build

# deploy to s3
# s3_website cfg apply --headless --autocreate-cloudfront-dist

docker run -t --rm \
  -v ${pwd}/src:/style-guide/src \
  -v ${pwd}/gulpfile.js:/style-guide/gulpfile.js \
  -v ${pwd}/dist:/style-guide/dist \
  -v ${pwd}/docs:/style-guide/docs \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  brainly/style-guide s3_website push


