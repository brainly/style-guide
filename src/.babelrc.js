// this file will be used only by babel 7;
// babel 6 will still use .babelrc in the root folder
// it makes repo code compatible both with babel 6 and 7
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
