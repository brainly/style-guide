const path = require('path');
const glob = require('glob');
const revHash = require('rev-hash');
const fs = require('fs');
const svgoConfigs = require('../svgo.config.js');

const SOURCE_DIR = path.join(__dirname, '../src');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, '_docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');
const STORYBOOK_ENV = process.env.STORYBOOK_ENV || 'prod';

async function findStories() {
  return glob
    .sync('src/**/*.stories.@(jsx|mdx)')
    .filter(storiesPath => !storiesPath.includes('.chromatic.stories.'))
    .map(storiesPath => path.relative(__dirname, storiesPath));
}

module.exports = {
  stories:
    STORYBOOK_ENV === 'chromatic'
      ? ['../src/**/*.chromatic.stories.@(jsx|mdx)']
      : findStories(),
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  webpackFinal: config => {
    const babelPlugins = [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      ['babel-plugin-emotion', {sourceMap: true, autoLabel: true}],
      'babel-plugin-macros',
      'babel-plugin-add-react-displayname',
      [
        'babel-plugin-react-docgen',
        {
          DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
        },
      ],
    ];

    if (STORYBOOK_ENV !== 'prod') {
      babelPlugins.push([
        'transform-define',
        {
          LOGO_BASE_URL: '',
        },
      ]);
    }
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
                '@babel/preset-react',
                '@babel/preset-flow',
              ],
              plugins: babelPlugins,
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
          path.resolve(__dirname, '../src/chromatic/styles.scss'),
          path.resolve(__dirname, '../src/_docs/styles.scss'),
        ],
      },
    ];

    // remove default storybook svg loader
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const test = rule.test
          .toString()
          .replace('svg|', '')
          .replace(/\//g, '');
        return {...rule, test: new RegExp(test)};
      } else {
        return rule;
      }
    });

    config.module.rules.push({
      test: /\/icons\/.*\.svg$/,
      include: [path.resolve(__dirname, '../src/images/icons')],
      sideEffects: true,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: svgoConfigs.icons,
        },
      ],
    });

    config.module.rules.push({
      test: /\/math-symbols\/.*\.svg$/,
      sideEffects: true,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'sg-math-symbol-icon-[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: svgoConfigs.mathSymbols,
        },
      ],
    });

    config.module.rules.push({
      test: /\/mobile-icons\/.*\.svg$/,
      sideEffects: true,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-mobile-[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: svgoConfigs.mathSymbols,
        },
      ],
    });

    config.module.rules.push({
      test: /\/subjects\/.*\.svg$/,
      sideEffects: true,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-subject-[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: svgoConfigs.subjectIcons,
        },
      ],
    });

    config.module.rules.push({
      test: /subjects-mono\/.*\.svg$/,
      sideEffects: true,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-subject-mono-[name]',
          },
        },
        {
          loader: 'svgo-loader',
          options: svgoConfigs.subjectMonoIcons,
        },
      ],
    });

    config.module.rules.push({
      test: /logos\/.*\.svg$/,
      sideEffects: true,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, '../src'),
            name: absoluteFilename => {
              const hash = revHash(fs.readFileSync(absoluteFilename));
              return `[path][name]-${hash}.[ext]`;
            },
          },
        },
      ],
    });

    config.resolve.modules.push(
      SOURCE_COMPONENTS_DIR,
      SOURCE_DOCS_DIR,
      path.join(SOURCE_DIR, 'images'),
      'node_modules'
    );

    return config;
  },
};
