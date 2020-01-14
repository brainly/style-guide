import React from 'react';
import DocsBlock from 'components/DocsBlock';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Counter from 'counters/Counter';

var overlayedBoxs = function overlayedBoxs() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Standard overlay box"
  }, React.createElement(OverlayedBox, {
    overlay: React.createElement(Counter, {
      size: "small"
    }, "1")
  }, React.createElement(Avatar, null)), "\xA0", React.createElement(OverlayedBox, {
    overlay: React.createElement(Counter, {
      size: "small"
    }, "456")
  }, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?man"
  }))));
};

export default overlayedBoxs;