#!/usr/bin/env bash

set -e

DEFAULT_HOST=$(cat .storybook/local-config.json | jq -r ".url")
DEFAULT_VERSION=latest

HOST="${HOST:=$DEFAULT_HOST}" # If variable not set or null, set it to default.
VERSION="${VERSION:=$DEFAULT_VERSION}"

yarn clean
yarn gulp build-assets --version=$VERSION
PUBLIC_PATH=$HOST/$VERSION/docs/ yarn build-sandbox --mode production
yarn build-newsletter-stories
SANDBOX_PUBLIC_PATH=$HOST/$VERSION/docs/ VERSION=$VERSION yarn build-storybook --quiet -o dist/storybook/$VERSION/docs

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
