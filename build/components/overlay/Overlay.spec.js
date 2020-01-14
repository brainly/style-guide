import React from 'react';
import Overlay from './Overlay';
import { shallow } from 'enzyme';
test('render', function () {
  var overlay = shallow(React.createElement(Overlay, null));
  expect(overlay.hasClass('sg-overlay')).toEqual(true);
});
test('children', function () {
  var overlay = shallow(React.createElement(Overlay, null, React.createElement("div", {
    className: "test"
  })));
  expect(overlay.find('.test')).toHaveLength(1);
});
test('partial', function () {
  var overlay = shallow(React.createElement(Overlay, {
    partial: true
  }));
  expect(overlay.hasClass('sg-overlay--partial')).toBeTruthy();
});