const path = require('path');
const argv = require('yargs').argv;

const IS_PRODUCTION = Boolean(argv.production);
const VERSION = argv.production ? pkg.version : 'dev';
const SOURCE_DIR = path.join(__dirname, '../src');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, '_docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');

module.exports = {
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-a11y'],
  webpackFinal: (config) => {
    // change 'sideEffects' flag to true in package.json in order to include scss files in static build
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/main.scss'),
    });

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      include: path.join(SOURCE_DIR, 'images'),
      options: {
        symbolId: (filePath) => {
          const pathParts = filePath.split(path.sep);
          const symbol = path.basename(filePath, '.svg');

          switch (pathParts[pathParts.length - 2]) {
            case 'math-symbols':
              return `sg-math-symbol-icon-${symbol}`;
            case 'icons':
              return `icon-${symbol}`;
            case 'subjects':
              return `icon-subject-${symbol}`;
            case 'subjects-mono':
              return `icon-subject-mono-${symbol}`;
            case 'mobile-icons':
              return `icon-mobile-${symbol}`;
            default:
              return symbol;
          }
        },
      },
    });

    config.module.rules.push({
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
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
