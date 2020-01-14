import React from 'react';
import Link, { LINK_SIZE, LINK_COLOR } from './Link';
import Text from './Text';
import { shallow } from 'enzyme';
test('render', function () {
  var link = shallow(React.createElement(Link, {
    href: "test.com"
  }, "Test"));
  expect(link.hasClass('sg-text--link')).toBeTruthy();
  expect(link.props().href).toEqual('test.com');
});
test('render Text', function () {
  var link = shallow(React.createElement(Link, {
    href: "test.com"
  }, "Test"));
  expect(link.find(Text)).toBeTruthy();
});
test('empty href', function () {
  var link = shallow(React.createElement(Link, null, "Test")).dive();
  expect(link.find('span')).toHaveLength(1);
});
test('size', function () {
  var link = shallow(React.createElement(Link, {
    size: LINK_SIZE.SMALL
  }, "Test")).dive();
  expect(link.hasClass('sg-text--small')).toBeTruthy();
});
test('color', function () {
  var link = shallow(React.createElement(Link, {
    color: LINK_COLOR.WHITE
  }, "Test")).dive();
  expect(link.hasClass('sg-text--white')).toBeTruthy();
});
test('unstyled', function () {
  var link = shallow(React.createElement(Link, {
    unstyled: true
  }, "Test"));
  expect(link.hasClass('sg-text--link-unstyled')).toBeTruthy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});
test('underlined', function () {
  var link = shallow(React.createElement(Link, {
    underlined: true
  }, "Test"));
  expect(link.hasClass('sg-text--link-underlined')).toBeTruthy();
  expect(link.hasClass('sg-text--link-unstyled')).toBeFalsy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});