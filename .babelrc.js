const babelEnv = params => [
  '@babel/preset-env',
  Object.assign(  {
    targets: '> 0.2%, not dead, not ie < 11',
  }, params)
];

module.exports = api => {
  api.cache(true);
  return {
    presets: [babelEnv({modules: false}), '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
    ],
    env: {
      test: {
        presets: [babelEnv({modules: 'auto'})],
      }
    }
  }
};
