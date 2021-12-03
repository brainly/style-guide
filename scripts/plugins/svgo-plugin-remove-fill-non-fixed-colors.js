module.exports = {
  name: 'svg-symbol-cleanup',
  type: 'perItem',
  fn: (node) => {
    if (node.name === 'svg' && node.attributes['data-fixedcolors'] !== 'true') {
      node.children.forEach((child) => {
        if (child.attributes.fill) {
          delete child.attributes.fill;
        }
      });
    }
  },
};
