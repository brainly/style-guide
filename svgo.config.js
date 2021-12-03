const svgSymbolCleanupPlugin = require('./scripts/plugins/svg-symbol-cleanup-plugin.js');

module.exports = {
  subjectIcons: {
    plugins: [
      Object.assign({}, svgSymbolCleanupPlugin, {
        params: {
          removeClass: false,
        },
      }),
    ],
  },
  subjectMonoIcons: {
    plugins: [
      Object.assign({}, svgSymbolCleanupPlugin, {
        params: {
          removeClass: true,
        },
      }),
    ],
  },
  icons: {
    plugins: [
      Object.assign({}, svgSymbolCleanupPlugin, {
        params: {
          removeClass: true,
        },
      }),
    ],
  },
  mathSymbols: {
    plugins: [
      Object.assign({}, svgSymbolCleanupPlugin, {
        params: {
          removeClass: true,
        },
      }),
    ],
  },
  mobileIcons: {
    plugins: [
      Object.assign({}, svgSymbolCleanupPlugin, {
        params: {
          removeClass: true,
        },
      }),
    ],
  },
};
