const path = require('path');
const fs = require('fs');
const svgoConfigs = require('./svgo.config.js');
const revHash = require('rev-hash');

const SOURCE_DIR = path.join(__dirname, 'src');
const SOURCE_COMPONENTS_DIR = path.join(SOURCE_DIR, 'components');
const SOURCE_DOCS_DIR = path.join(SOURCE_DIR, 'docs');

const publicPath =
  typeof process.env.PUBLIC_PATH === 'string'
    ? process.env.PUBLIC_PATH
    : 'http://localhost:6006/';

const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params
  ),
];

module.exports = {
  mode: 'development',
  entry: {
    'style-guide': './src/index.js',
    'style-guide-styles': './src/main.scss',
    'style-guide-fonts': './src/sandbox/fonts.css',
  },
  output: {
    path: path.resolve(__dirname, './dist-sandbox'),
    publicPath,
    library: 'styleGuide',
    libraryTarget: 'commonjs2',
  },
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
        test: /(\.scss|\.css)$/,
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
      },
    ],
  },
  resolve: {
    modules: [
      SOURCE_COMPONENTS_DIR,
      SOURCE_DOCS_DIR,
      path.join(SOURCE_DIR, 'images'),
      path.join('node_modules'),
    ],
    extensions: ['.jsx', '.js'],
  },
};
