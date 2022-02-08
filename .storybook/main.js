const path = require('path');
const glob = require('glob');
const webpackConfigFn = require('../webpack.config');
const webpackConfig = webpackConfigFn();

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
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    // './addon-a11ydocs/register.js'
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

    return config;
  },
};
