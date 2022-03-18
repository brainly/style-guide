const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const argv = require('yargs').argv;
const pkg = require('./package');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const revHash = require('rev-hash');
const fs = require('fs');
const svgoConfigs = require('./svgo.config.js');

const IS_PRODUCTION = Boolean(argv.production);
const VERSION = argv.production ? pkg.version : 'dev';
const SOURCE_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');
const VERSIONED_DIST_DIR = path.join(DIST_DIR, VERSION);
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, 'docs');
const SOURCE_DOCS_STORYBOOK_DIR = path.join(SOURCE_DIR, '_docs');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');
const DIST_DIR_OUTPUT = path.join(VERSIONED_DIST_DIR, 'docs/', 'js/');

const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params
  ),
];

module.exports = () => {
  const jsEntry = path.join(SOURCE_DOCS_DIR, 'webpackEntry.jsx');

  const config = {
    target: 'web',
    module: {
      rules: [
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
                context: path.resolve(__dirname, './src'),
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
            cacheDirectory: true,
            presets: [babelEnv({modules: false}), '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-flow-strip-types',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              'react-hot-loader/babel',
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
                    path.resolve(__dirname, 'node_modules'),
                  ],
                },
              },
            },
          ],
          include: path.resolve(__dirname),
        },
      ],
    },
    externals: {
      html_beautify: {
        root: 'html_beautify',
      },
      hljs: 'hljs',
    },
    entry: {
      [path.basename(jsEntry)]: jsEntry,
    },
    output: {
      filename: '[name].bundle.js',
      path: DIST_DIR_OUTPUT,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        SOURCE_COMPONENTS_DIR,
        SOURCE_DOCS_DIR,
        SOURCE_DOCS_STORYBOOK_DIR,
        path.join(SOURCE_DIR, 'images'),
        'node_modules',
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(SOURCE_DOCS_DIR, 'index.html'),
      }),
    ],
    devtool: IS_PRODUCTION ? 'source-map' : 'eval',
    optimization: {
      minimize: IS_PRODUCTION,
      minimizer: IS_PRODUCTION
        ? [
            new TerserPlugin({
              sourceMap: true,
              parallel: true,
              terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
              },
            }),
          ]
        : undefined,
    },
    devServer: {
      contentBase: path.join(VERSIONED_DIST_DIR, 'docs'),
      index: 'index.html',
      watchContentBase: true,
      historyApiFallback: {
        disableDotRule: true,
      },
    },
    watchOptions: {
      ignored: /src\/logos\.js/,
    },
  };

  return config;
};
