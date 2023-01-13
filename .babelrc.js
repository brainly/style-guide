const {url} = require('./config.json');

const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params
  ),
];

let logoBaseUrl;

module.exports = api => {
  const nodeEnv = api.env();

  const publicPath = process.env.PUBLIC_PATH || `${url}/`;

  return {
    presets: [
      ['@babel/preset-typescript', {isTSX: true, allExtensions: true}],
      babelEnv({modules: false}),
      '@babel/preset-react',
    ],
    plugins: [
      'codegen',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      [
        'transform-define',
        {
          LOGO_BASE_URL: publicPath,
        },
      ],
    ],
    env: {
      test: {
        presets: [babelEnv({modules: 'auto'})],
        plugins: [['@babel/plugin-transform-runtime']],
      },
      commonjs: {
        presets: [babelEnv({modules: 'auto'})],
      },
      esm: {
        presets: [babelEnv({modules: false})],
        plugins: [['@babel/plugin-transform-runtime', {useESModules: true}]],
      },
    },
  };
};
