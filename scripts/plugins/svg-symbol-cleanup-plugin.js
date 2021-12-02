module.exports = {
  name: 'svg-symbol-cleanup',
  type: 'perItem',
  fn: ast => {
    if (
      ast.name === 'svg' &&
      ast.attributes &&
      ast.attributes['data-fixedcolors'] !== 'true'
    ) {
      ast.children.forEach(child => {
        if (child.attributes.fill) {
          child.attributes.fill = '';
        }
      });
    }

    // @TODO: implement remove class process from /scripts/svgs-generate.js
  },
};
