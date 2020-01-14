import React from 'react';
import { shallow } from 'enzyme';
import ContrastBox from './ContrastBox';
test('render', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, null, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box')).toEqual(true);
});
test('to bottom', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, {
    toBottom: true
  }, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box--to-bottom')).toEqual(true);
});
test('small padding', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, {
    smallPadding: true
  }, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box--small-padding')).toEqual(true);
});
test('light', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, {
    light: true
  }, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box--light')).toEqual(true);
});
test('full width', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, {
    fullWidth: true
  }, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box--full-width')).toEqual(true);
});
test('narrow', function () {
  var contrastBox = shallow(React.createElement(ContrastBox, {
    narrow: true
  }, "some text"));
  expect(contrastBox.hasClass('docs-block__contrast-box--narrow')).toEqual(true);
});