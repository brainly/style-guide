#!/usr/bin/env bash

set -e

yarn clean
yarn gulp build-assets
yarn build-sandbox
yarn build-newsletter-stories
yarn start-storybook -p 6006
