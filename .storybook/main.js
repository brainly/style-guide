const path = require('path');

module.exports = {
  stories: ['../src/*.stories.@(jsx|mdx)', '../src/**/*.stories.@(jsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {

    // change 'sideEffects' flag to true in package.json in order to include scss files in static build
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/main.scss'),
    });

    return config;
  }
};
