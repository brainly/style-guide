import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import OverlayedBox from '../OverlayedBox';
import Avatar from 'avatar/Avatar';
import Counter from 'counters/Counter';

var OverlayedBoxes = function OverlayedBoxes() {
  var settings = [];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Avatar, null)), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(OverlayedBox, {
    overlay: React.createElement(Counter, null, "3")
  }, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?cat"
  }))));
};

export default OverlayedBoxes;