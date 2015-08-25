#!/usr/bin/env bash

# This script creates s3 bucket and cloudfront distribution
# based on s3_website.yml description
#
# Note: the process will update the s3_website.yml file with cloudnfront distribution ID

docker run -t --rm \
  -v ${pwd}/src:/style-guide/src \
  -v ${pwd}/gulpfile.js:/style-guide/gulpfile.js \
  -v ${pwd}/dist:/style-guide/dist \
  -v ${pwd}/docs:/style-guide/docs \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  brainly/style-guide s3_website cfg apply
