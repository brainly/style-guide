// @flow strict

const LOGO_SOURCE_PATHS = require('./logotypes.json');
const pkg = require('../../../package.json');

const assetsBaseUrls = {
  dev: '/',
  prod: 'https://styleguide.brainly.com/',
};

let logoUrls;

if (STYLE_GUIDE_ENV === 'storybook-dev' || STYLE_GUIDE_ENV === 'beta-dev') {
  logoUrls = LOGO_SOURCE_PATHS;
} else {
  const ver = STYLE_GUIDE_ENV === 'prod' ? pkg.version : 'dev';
  const manifest = require(`../../../dist/${ver}/rev-manifest.json`);

  logoUrls = Object.keys(LOGO_SOURCE_PATHS).reduce((acc, next) => {
    acc[next] = `${assetsBaseUrls[STYLE_GUIDE_ENV]}${
      manifest[LOGO_SOURCE_PATHS[next]]
    }`;
    return acc;
  }, {});
}

export const LOGO_URLS = logoUrls;
