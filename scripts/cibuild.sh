#!/usr/bin/env bash

GIT_SHORT_COMMIT=${GIT_COMMIT:0:7}
export IMAGE_ARTIFACT=brainly/${JOB_NAME}:${BUILD_NUMBER}-${GIT_SHORT_COMMIT}

docker build -t $IMAGE_ARTIFACT .
docker push $IMAGE_ARTIFACT
