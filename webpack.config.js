const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const argv = require('yargs').argv;
const pkg = require('./package');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PRODUCTION = Boolean(argv.production);
const VERSION = argv.production ? pkg.version : 'dev';
const SOURCE_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');
const VERSIONED_DIST_DIR = path.join(DIST_DIR, VERSION);
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, 'docs');
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
                default:
                  return symbol;
              }
            },
          },
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
            ],
            env: {
              test: {
                presets: [babelEnv({modules: 'auto'})],
              },
            },
          },
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
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')({
                    browsers: [
                      'last 2 versions',
                      'OperaMini >= 5',
                      'Android >= 4',
                      'Chrome >= 28',
                      'Safari >= 7',
                    ],
                    cascade: false,
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  SOURCE_DIR,
                  path.resolve(__dirname, 'node_modules'),
                ],
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
  };

  return config;
};
