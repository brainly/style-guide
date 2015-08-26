#!/bin/bash
set -e

./scripts/cibuild

docker run -t --rm \
  -v $(pwd)/dist:/style-guide/dist \
  -e AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
  -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  brainly/style-guide s3_website push
