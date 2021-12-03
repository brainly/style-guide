const svgSymbolCleanupPlugin = require('./scripts/plugins/svg-symbol-cleanup-plugin.js');

module.exports = {
  plugins: [
    Object.assign(svgSymbolCleanupPlugin, {
      params: {
        removeClass: true,
      },
    }),
  ],
};
