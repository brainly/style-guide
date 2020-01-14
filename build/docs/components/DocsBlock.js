import React from 'react';
import cx from 'classnames';
import InfoBlock from './docsBlock/InfoBlock';
import ContentBlock from './docsBlock/ContentBlock';

var DocsBlock = function DocsBlock(_ref) {
  var info = _ref.info,
      evenColumns = _ref.evenColumns,
      fullWidth = _ref.fullWidth,
      additionalInfo = _ref.additionalInfo,
      children = _ref.children,
      _ref$multiContent = _ref.multiContent,
      multiContent = _ref$multiContent === void 0 ? [] : _ref$multiContent,
      toBottom = _ref.toBottom,
      centered = _ref.centered,
      spacedBetween = _ref.spacedBetween,
      justified = _ref.justified;
  return React.createElement("section", {
    className: cx('docs-block', {
      'docs-block--even-columns': evenColumns,
      'docs-block--full-width': fullWidth
    })
  }, React.createElement(InfoBlock, {
    info: info,
    additionalInfo: additionalInfo
  }), React.createElement(ContentBlock, {
    toBottom: toBottom,
    centered: centered,
    spacedBetween: spacedBetween,
    justified: justified
  }, children), multiContent.map(function (extraChild, i) {
    return React.createElement(ContentBlock, {
      toBottom: toBottom,
      centered: centered,
      spacedBetween: spacedBetween,
      justified: justified,
      key: i
    }, extraChild);
  }));
};

export default DocsBlock;
export { InfoBlock, ContentBlock };