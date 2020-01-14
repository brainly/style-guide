import React from 'react';
import Text from './Text';
import { TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN } from './textConsts';
import { shallow } from 'enzyme';
test('render', function () {
  var text = shallow(React.createElement(Text, null, "Test"));
  expect(text.hasClass('sg-text')).toBeTruthy();
});
test('size', function () {
  var text = shallow(React.createElement(Text, {
    size: TEXT_SIZE.XLARGE
  }, "Test"));
  expect(text.hasClass('sg-text--xlarge')).toBeTruthy();
});
test('type', function () {
  var text = 'random text';
  var component = shallow(React.createElement(Text, {
    type: TEXT_TYPE.SPAN
  }, text));
  expect(component.find('span').contains(text)).toEqual(true);
});
test('type - label', function () {
  var text = 'random text';
  var component = shallow(React.createElement(Text, {
    type: TEXT_TYPE.LABEL
  }, text));
  expect(component.find('label').contains(text)).toEqual(true);
});
test('color', function () {
  var text = shallow(React.createElement(Text, {
    color: TEXT_COLOR.MINT_DARK
  }, "Test"));
  expect(text.hasClass('sg-text--mint-dark')).toBeTruthy();
});
test('weight', function () {
  var text = shallow(React.createElement(Text, {
    weight: TEXT_WEIGHT.BOLD
  }, "Test"));
  expect(text.hasClass('sg-text--bold')).toBeTruthy();
});
test('transform - uppercase', function () {
  var text = shallow(React.createElement(Text, {
    transform: TEXT_TRANSFORM.UPPERCASE
  }, "Test"));
  expect(text.hasClass('sg-text--uppercase')).toBeTruthy();
});
test('transform - lowercase', function () {
  var text = shallow(React.createElement(Text, {
    transform: TEXT_TRANSFORM.LOWERCASE
  }, "Test"));
  expect(text.hasClass('sg-text--lowercase')).toBeTruthy();
});
test('transform - capitalize', function () {
  var text = shallow(React.createElement(Text, {
    transform: TEXT_TRANSFORM.CAPITALIZE
  }, "Test"));
  expect(text.hasClass('sg-text--capitalize')).toBeTruthy();
});
test('align - left', function () {
  var text = shallow(React.createElement(Text, {
    align: TEXT_ALIGN.LEFT
  }, "Test"));
  expect(text.hasClass('sg-text--to-left')).toBeTruthy();
});
test('align - center', function () {
  var text = shallow(React.createElement(Text, {
    align: TEXT_ALIGN.CENTER
  }, "Test"));
  expect(text.hasClass('sg-text--to-center')).toBeTruthy();
});
test('align - right', function () {
  var text = shallow(React.createElement(Text, {
    align: TEXT_ALIGN.RIGHT
  }, "Test"));
  expect(text.hasClass('sg-text--to-right')).toBeTruthy();
});
test('align - justify', function () {
  var text = shallow(React.createElement(Text, {
    align: TEXT_ALIGN.JUSTIFY
  }, "Test"));
  expect(text.hasClass('sg-text--justify')).toBeTruthy();
});
test('full', function () {
  var text = shallow(React.createElement(Text, {
    full: true
  }, "Test"));
  expect(text.hasClass('sg-text--full')).toBeTruthy();
});
test('asContainer', function () {
  var text = shallow(React.createElement(Text, {
    asContainer: true
  }, "Test"));
  expect(text.hasClass('sg-text--container')).toBeTruthy();
});