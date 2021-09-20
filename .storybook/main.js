const path = require('path');
const argv = require('yargs').argv;

const IS_PRODUCTION = Boolean(argv.production);
const VERSION = IS_PRODUCTION ? pkg.version : 'dev';
const SOURCE_DIR = path.join(__dirname, '../src');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, '_docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');

module.exports = {
  stories: ['../src/**/*.stories.@(jsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  webpackFinal: config => {
    // change 'sideEffects' flag to true in package.json in order to include scss files in static build

    config.module.rules = [
      // remove default loader for jsx, tsx and mjs files
      ...config.module.rules.slice(1),
      {
        test: /\.(mjs|jsx?|tsx?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: `.cache/storybook`,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    shippedProposals: true,
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-typescript',
                IS_PRODUCTION && [
                  'babel-preset-minify',
                  {builtIns: false, mangle: false},
                ],
                '@babel/preset-react',
                '@babel/preset-flow',
              ].filter(Boolean),
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                ['babel-plugin-emotion', {sourceMap: true, autoLabel: true}],
                'babel-plugin-macros',
                'babel-plugin-add-react-displayname',
                [
                  'babel-plugin-react-docgen',
                  {DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES'},
                ],
              ],
            },
          },
        ],
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.resolve(__dirname, '../src/main.scss'),
          path.resolve(__dirname, '../src/_docs/styles.scss'),
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.join(SOURCE_DIR, 'images'),
        options: {
          symbolId: filePath => {
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
      },
    ];

    config.resolve.modules.push(
      SOURCE_COMPONENTS_DIR,
      SOURCE_DOCS_DIR,
      path.join(SOURCE_DIR, 'images'),
      'node_modules'
    );

    return config;
  },
};
