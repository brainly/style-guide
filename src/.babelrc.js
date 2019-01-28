const babelEnv = modules => [
  '@babel/preset-env',
  {
    modules,
    targets: '> 0.2%, not dead, not ie < 11'
  }
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets: [babelEnv(false), '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
    ],
    env: {
      test: {
        presets: [babelEnv('auto')],
      }
    }
  }
};
