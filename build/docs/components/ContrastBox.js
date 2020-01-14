import React from 'react';
import classnames from 'classnames';
var contrastBlockCssClass = 'docs-block__contrast-box';

var ContrastBox = function ContrastBox(_ref) {
  var toBottom = _ref.toBottom,
      smallPadding = _ref.smallPadding,
      light = _ref.light,
      fullWidth = _ref.fullWidth,
      narrow = _ref.narrow,
      children = _ref.children;
  var cssClass = classnames(contrastBlockCssClass, {
    'docs-block__contrast-box--to-bottom': toBottom,
    'docs-block__contrast-box--small-padding': smallPadding,
    'docs-block__contrast-box--light': light,
    'docs-block__contrast-box--full-width': fullWidth,
    'docs-block__contrast-box--narrow': narrow
  });
  return React.createElement("section", {
    className: cssClass
  }, children);
};

export default ContrastBox;
export { contrastBlockCssClass };