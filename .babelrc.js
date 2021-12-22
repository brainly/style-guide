const argv = require('yargs').argv;
const IS_PRODUCTION = Boolean(argv.production);

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

if (
  process.env.STORYBOOK_ENV === 'dev' ||
  process.env.STORYBOOK_ENV === 'chromatic'
) {
  logoBaseUrl = '';
} else if (process.env.DOCS_ENV === 'dev') {
  logoBaseUrl = '/';
} else {
  logoBaseUrl = 'https://styleguide.brainly.com/';
}

module.exports = api => {
  api.cache(true);
  return {
    presets: [
      babelEnv({modules: false}),
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      [
        'transform-define',
        {
          LOGO_BASE_URL: logoBaseUrl,
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
