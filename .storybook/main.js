const path = require('path');
const glob = require('glob');
const webpackConfigFn = require('../webpack.config');
const webpackConfig = webpackConfigFn();
const pkg = require('../package.json');
const fs = require('fs');

process.env.STORYBOOK_ENV = process.env.STORYBOOK_ENV || 'dev';

async function findStories() {
  return glob
    .sync('src/**/*.stories.@(jsx|mdx)')
    .filter(storiesPath => !storiesPath.includes('.chromatic.stories.'))
    .map(storiesPath => path.relative(__dirname, storiesPath));
}

module.exports = {
  stories:
    process.env.STORYBOOK_ENV === 'chromatic'
      ? ['../src/**/*.chromatic.stories.@(jsx|mdx)']
      : findStories(),
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  staticDirs: ['./public'],
  webpackFinal: config => {
    // remove default loader for jsx, tsx and mjs
    config.module.rules = config.module.rules.slice(1);

    // remove default loader for fonts
    config.module.rules = config.module.rules.filter(
      rule => !rule.test.toString().includes('woff')
    );

    // standard rules
    config.module.rules = config.module.rules.concat(
      webpackConfig.module.rules
    );

    // support for aliases
    config.resolve.modules.push(...webpackConfig.resolve.modules);

    let revManifestPath;

    const pathToVersionedManifest = path.resolve(
      __dirname,
      '../',
      'dist',
      pkg.version,
      'rev-manifest.json'
    );
    const pathToDevManifest = path.resolve(
      __dirname,
      '../',
      'dist',
      'dev',
      'rev-manifest.json'
    );

    revManifestPath = [pathToVersionedManifest, pathToDevManifest].find(path =>
      fs.existsSync(path)
    );

    if (!revManifestPath) {
      throw new Error(`rev-manifest.json not found in paths:
      ${pathToVersionedManifest}
      ${pathToDevManifest}.
      Run 'yarn build'.`);
    }

    // alias for finger printed asset urls
    config.resolve.alias.RevManifest = revManifestPath;

    return config;
  },
};
