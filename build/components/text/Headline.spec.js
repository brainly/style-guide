import React from 'react';
import Headline, { HEADLINE_SIZE, HEADLINE_TYPE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN } from './Headline';
import { shallow, mount } from 'enzyme';
test('render', function () {
  var headline = shallow(React.createElement(Headline, null, "Test"));
  expect(headline.hasClass('sg-headline')).toBeTruthy();
});
test('size', function () {
  var headline = shallow(React.createElement(Headline, {
    size: HEADLINE_SIZE.SMALL
  }, "Test"));
  expect(headline.hasClass('sg-headline--small')).toBeTruthy();
});
test('type', function () {
  var headline = mount(React.createElement(Headline, {
    type: HEADLINE_TYPE.H3
  }, "Test"));
  expect(headline.props().type).toEqual(HEADLINE_TYPE.H3);
});
test('light', function () {
  var text = shallow(React.createElement(Headline, {
    color: HEADLINE_COLOR.WHITE
  }, "Test"));
  expect(text.hasClass('sg-headline--white')).toBeTruthy();
});
test('default size', function () {
  var headline = shallow(React.createElement(Headline, {
    size: HEADLINE_SIZE.NORMAL
  }, "Test"));
  expect(headline.hasClass('sg-headline--normal')).toBeFalsy();
});
test('transform uppercase', function () {
  var headline = shallow(React.createElement(Headline, {
    transform: HEADLINE_TRANSFORM.UPPERCASE
  }, "Test"));
  expect(headline.hasClass('sg-headline--uppercase')).toBeTruthy();
});
test('extra bold', function () {
  var headline = shallow(React.createElement(Headline, {
    extraBold: true
  }, "Test"));
  expect(headline.hasClass('sg-headline--extra-bold')).toBeTruthy();
});
test('extra align left', function () {
  var headline = shallow(React.createElement(Headline, {
    align: HEADLINE_ALIGN.LEFT
  }, "Test"));
  expect(headline.hasClass('sg-headline--to-left')).toBeTruthy();
});