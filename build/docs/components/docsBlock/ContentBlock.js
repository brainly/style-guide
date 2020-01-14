import React from 'react';
import classnames from 'classnames';

var ContentBlock = function ContentBlock(_ref) {
  var children = _ref.children,
      toBottom = _ref.toBottom,
      centered = _ref.centered,
      spacedBetween = _ref.spacedBetween,
      justified = _ref.justified;
  var contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered,
    'docs-block__content--space-between': spacedBetween,
    'docs-block__content--justified': justified
  });
  return React.createElement("div", {
    className: contentClass
  }, children);
};

export default ContentBlock;