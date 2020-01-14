import React from 'react';
import DocsBlock from 'components/DocsBlock';

var OverlayExample = function OverlayExample() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement("iframe", {
    width: "600",
    height: "400",
    src: "components/overlay/example.html"
  })));
};

export default OverlayExample;