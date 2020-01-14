import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Media from './Media';
import { shallow } from 'enzyme';
var defaultProps = {
  contentArray: [React.createElement("span", {
    key: 1,
    className: "sg-text sg-text--gray sg-text--link"
  }, "The Goat"), React.createElement("span", {
    key: 2
  }, "Master ")],
  aside: React.createElement("div", null, "aside")
};
test('render', function () {
  var media = shallow(React.createElement(Media, defaultProps));
  expect(media.hasClass('sg-media')).toEqual(true);
  expect(media.find('.sg-media__content')).toHaveLength(defaultProps.contentArray.length);
});
test('testing modifications - all on', function () {
  var media = shallow(React.createElement(Media, _extends({}, defaultProps, {
    clickable: true,
    graySecondaryLight: true,
    focused: true,
    toRight: true,
    small: true,
    transparent: true,
    noPadding: true,
    spacedBottom: true
  })));
  expect(media.hasClass('sg-media--clickable')).toEqual(true);
  expect(media.hasClass('sg-media--gray-secondary-light')).toEqual(true);
  expect(media.hasClass('sg-media--focused')).toEqual(true);
  expect(media.hasClass('sg-media--to-right')).toEqual(true);
  expect(media.hasClass('sg-media--transparent')).toEqual(true);
  expect(media.hasClass('sg-media--no-padding')).toEqual(true);
  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(defaultProps.contentArray.length);
  expect(media.find('.sg-media__content--small')).toHaveLength(defaultProps.contentArray.length);
});
test('testing modifications - all off', function () {
  var media = shallow(React.createElement(Media, defaultProps));
  expect(media.hasClass('sg-media--clickable')).toEqual(false);
  expect(media.hasClass('sg-media--gray-secondary-light')).toEqual(false);
  expect(media.hasClass('sg-media--focused')).toEqual(false);
  expect(media.hasClass('sg-media--to-right')).toEqual(false);
  expect(media.hasClass('sg-media--transparent')).toEqual(false);
  expect(media.hasClass('sg-media--no-padding')).toEqual(false);
  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(0);
  expect(media.find('.sg-media__content--small')).toHaveLength(0);
});