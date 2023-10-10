const removeFillNonFixedColors = require('./scripts/plugins/svgo-plugin-remove-fill-non-fixed-colors.js');

const removeClass = {
  name: 'removeAttrs',
  params: {
    attrs: 'class',
  },
};

module.exports = {
  subjectIcons: {
    plugins: ['removeTitle'],
  },
  subjectMonoIcons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle', 'convertPathData'],
  },
  icons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle', 'convertPathData'],
  },
  mathSymbols: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle', 'convertPathData'],
  },
  mobileIcons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle', 'convertPathData'],
  },
};
