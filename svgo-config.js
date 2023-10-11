const removeFillNonFixedColors = require('./scripts/plugins/svgo-plugin-remove-fill-non-fixed-colors.js');

const removeClass = {
  name: 'removeAttrs',
  params: {
    attrs: 'class',
  },
};

module.exports = {
  subjectIcons: {
    plugins: ['removeTitle', 'convertPathData'],
  },
  subjectMonoIcons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle'],
  },
  icons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle'],
  },
  mathSymbols: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle'],
  },
  mobileIcons: {
    plugins: [removeClass, removeFillNonFixedColors, 'removeTitle'],
  },
};
