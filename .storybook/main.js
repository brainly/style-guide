const path = require('path');
const argv = require('yargs').argv;

const IS_PRODUCTION = Boolean(argv.production);
const VERSION = argv.production ? pkg.version : 'dev';
const SOURCE_DIR = path.join(__dirname, 'src');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, '_docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');

module.exports = {
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  webpackFinal: (config) => {
    // change 'sideEffects' flag to true in package.json in order to include scss files in static build
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/main.scss'),
    });

    config.resolve.modules.push(
      ...[
        SOURCE_COMPONENTS_DIR,
        SOURCE_DOCS_DIR,
        path.join(SOURCE_DIR, 'images'),
        'node_modules',
      ],
    );

    return config;
  },
};
