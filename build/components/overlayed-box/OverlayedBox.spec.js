import React from 'react';
import { shallow } from 'enzyme';
import OverlayedBox from './OverlayedBox';
test('render', function () {
  var overlay = React.createElement("div", {
    className: "custom-overlay-element"
  }, "abc");
  var overlayedBox = shallow(React.createElement(OverlayedBox, {
    overlay: overlay
  }, React.createElement("div", {
    className: "custom-children-element"
  }, "xyz")));
  expect(overlayedBox.hasClass('sg-overlayed-box')).toEqual(true);
  expect(overlayedBox.find('.custom-children-element')).toHaveLength(1);
  var overlayElem = overlayedBox.find('.sg-overlayed-box__overlay');
  expect(overlayElem).toHaveLength(1);
  expect(overlayedBox.find('.custom-overlay-element')).toHaveLength(1);
  expect(overlayElem.find('.custom-overlay-element')).toHaveLength(1);
});