const removeFillNonFixedColors = require('./scripts/plugins/svgo-plugin-remove-fill-non-fixed-colors.js');

const removeClass = {
  name: 'removeAttrs',
  params: {
    attrs: 'class',
  },
};

module.exports = {
  subjectIcons: {
    plugins: [removeFillNonFixedColors],
  },
  subjectMonoIcons: {
    plugins: [removeClass, removeFillNonFixedColors],
  },
  icons: {
    plugins: [removeClass, removeFillNonFixedColors],
  },
  mathSymbols: {
    plugins: [removeClass, removeFillNonFixedColors],
  },
  mobileIcons: {
    plugins: [removeClass, removeFillNonFixedColors],
  },
};
