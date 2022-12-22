const path = require('path');
const glob = require('glob');
const pkg = require('../package.json');
const fs = require('fs');
const svgoConfigs = require('../svgo-config.js');
const revHash = require('rev-hash');
const webpack = require('webpack');

const SOURCE_DIR = path.join(__dirname, '../', 'src');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, 'docs');

const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params
  ),
];

async function findStories() {
  return glob
    .sync('@(src|dist)/**/*.stories.@(jsx|mdx)')
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
    '../dist/sandbox-addon/preset.js',
  ],
  staticDirs: ['./public', '../dist/sandbox', '../dist/storybook-public'],
  webpackFinal: config => {
    const VERSION = process.env.VERSION || 'latest';

    if (process.env.STORYBOOK_ENV === 'chromatic') {
      config.publicPath = '/';
    }

    // remove default loader for jsx, tsx and mjs
    config.module.rules = config.module.rules.slice(1);

    // remove default loader for fonts
    config.module.rules = config.module.rules.filter(
      rule => !rule.test.toString().includes('woff')
    );

    // standard rules
    config.module.rules = config.module.rules.concat([
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\/icons\/.*\.svg$/,
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        test: /logos\/.*\.svg$/,
        sideEffects: true,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: path.resolve(__dirname, '../', './src'),
              name: absoluteFilename => {
                const hash = revHash(fs.readFileSync(absoluteFilename));

                return `[path][name]-${hash}.[ext]`;
              },
            },
          },
        ],
      },
      {
        test: /\.js$|jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [babelEnv({modules: false}), '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-flow-strip-types',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
            '@babel/plugin-syntax-dynamic-import',
            ['@emotion', {sourceMap: true, autoLabel: 'dev-only'}],
            'babel-plugin-macros',
            'babel-plugin-add-react-displayname',
            [
              'babel-plugin-react-docgen',
              {
                DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
              },
            ],
          ],
          env: {
            test: {
              presets: [babelEnv({modules: 'auto'})],
            },
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    cascade: false,
                  }),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  SOURCE_DIR,
                  path.resolve(__dirname, '../', 'node_modules'),
                ],
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ]);

    // support for aliases
    config.resolve.modules.push(
      ...[
        SOURCE_COMPONENTS_DIR,
        SOURCE_DOCS_DIR,
        path.join(SOURCE_DIR, 'images'),
        path.join('../', 'node_modules'),
      ]
    );

    // alias for finger printed asset urls
    config.resolve.alias.RevManifest = path.resolve(
      __dirname,
      '../',
      'dist',
      'storybook',
      VERSION,
      'rev-manifest.json'
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        STORYBOOK_ENV: JSON.stringify(process.env.STORYBOOK_ENV),
      })
    );

    return config;
  },
};
