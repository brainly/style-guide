import React from 'react';

var InfoBlock = function InfoBlock(_ref) {
  var info = _ref.info,
      additionalInfo = _ref.additionalInfo;

  if (!info && !additionalInfo) {
    return null;
  }

  var header;

  if (info) {
    header = React.createElement("h3", {
      className: "docs-block__header"
    }, info);
  }

  return React.createElement("aside", {
    className: "docs-block__info"
  }, header, additionalInfo);
};

export default InfoBlock;