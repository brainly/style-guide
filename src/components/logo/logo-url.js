// @flow strict

import LOGO_SOURCE_PATHS from './logotypes';

declare var STYLE_GUIDE_ENV: string;

const assetsBaseUrls = {
  dev: '/',
  prod: 'https://styleguide.brainly.com/',
};

let logoUrls;

if (STYLE_GUIDE_ENV === 'storybook-dev' || STYLE_GUIDE_ENV === 'beta-dev') {
  logoUrls = LOGO_SOURCE_PATHS;
} else {
  // $FlowFixMe
  const manifest = require(`../../../dist/rev-manifest.json`);

  logoUrls = Object.keys(LOGO_SOURCE_PATHS).reduce((acc, next) => {
    acc[next] = `${assetsBaseUrls[STYLE_GUIDE_ENV]}${
      manifest[LOGO_SOURCE_PATHS[next]]
    }`;
    return acc;
  }, {});
}

export const LOGO_URLS = logoUrls;
