const babelEnv = (params) => [
  '@babel/preset-env',
  Object.assign(
    {
      targets: '> 0.2%, not dead, not ie < 11',
    },
    params,
  ),
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      babelEnv({ modules: false }),
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      [
        'transform-define',
        {
          'process.env.STORYBOOK_ENV': process.env.STORYBOOK_ENV,
        },
      ],
    ],
    env: {
      test: {
        presets: [babelEnv({ modules: 'auto' })],
        plugins: [['@babel/plugin-transform-runtime']],
      },
      commonjs: {
        presets: [babelEnv({ modules: 'auto' })],
      },
      esm: {
        presets: [babelEnv({ modules: false })],
        plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
      },
    },
  };
};
