#!/usr/bin/env bash

# This script creates s3 bucket and cloudfront distribution
# based on s3_website.yml description
#
# Note: the process will update the s3_website.yml file with cloudnfront distribution ID

DIR=`pwd`

docker run -t --rm \
  -v $DIR/s3_website.yml:/style-guide/s3_website.yml \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  brainly/style-guide s3_website cfg apply --headless --autocreate-cloudfront-dist
