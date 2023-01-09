#!/usr/bin/env bash

set -e

yarn clean
yarn gulp build-assets
node ./scripts/build-types.js
node ./scripts/build-sandbox-types.js
yarn build-sandbox
yarn build-sandbox-addon
yarn build-newsletter-stories
yarn start-storybook -p 6006
