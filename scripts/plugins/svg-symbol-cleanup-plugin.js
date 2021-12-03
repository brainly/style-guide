module.exports = {
  name: 'svg-symbol-cleanup',
  type: 'perItem',
  fn: (node, params) => {
    if (node.name === 'svg' && node.attributes['data-fixedcolors'] !== 'true') {
      node.children.forEach((child) => {
        if (params.removeClass) {
          delete child.attributes.class;
        }

        if (child.attributes.fill) {
          delete child.attributes.fill;
        }
      });
    }
  },
};
