#!/usr/bin/env bash

set -e

DEFAULT_HOST=$(cat config.json | jq -r ".url")
DEFAULT_VERSION=latest

HOST="${HOST:=$DEFAULT_HOST}" # If variable not set or null, set it to default.
VERSION="${VERSION:=$DEFAULT_VERSION}"

yarn clean
yarn gulp build-assets --version=$VERSION
node ./scripts/build-types.js
node ./scripts/build-sandbox-types.js
PUBLIC_PATH=$HOST/$VERSION/docs/ yarn build-sandbox --mode production
PUBLIC_PATH=$HOST/$VERSION/docs/ yarn build-sandbox-addon --mode production
yarn build-newsletter-stories
VERSION=$VERSION yarn build-storybook --quiet -o dist/storybook/$VERSION/docs

optstring="d"

DETACH=false

while getopts ${optstring} arg; do
    case ${arg} in
    d)
        echo "DETACH=true"
        DETACH=true
        ;;
    esac
done

if [ $DETACH = false ]; then
    yarn gulp root-redirect-page --version=${VERSION}
fi
