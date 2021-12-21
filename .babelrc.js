const argv = require('yargs').argv;

const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params
  ),
];

module.exports = api => {
  console.log('.babelrc !!!!!!!!!!!!');
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
          LOGO_BASE_URL: 'https://styleguide.brainly.com/',
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
