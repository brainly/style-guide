import React from 'react';
import Icon, { TYPE, ICON_COLOR } from './Icon';
import { shallow } from 'enzyme';
test('render if type', function () {
  var icon = shallow(React.createElement(Icon, {
    type: TYPE.ANSWER
  }));
  expect(icon.hasClass('sg-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});
test('render if children', function () {
  var icon = shallow(React.createElement(Icon, null, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fillRule: "nonzero",
    d: "M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z"
  })))));
  expect(icon.hasClass('sg-icon')).toEqual(true);
  expect(icon.find('svg')).toHaveLength(1);
});
test('type passed to xlink:href', function () {
  var type = TYPE.ANSWER;
  var icon = shallow(React.createElement(Icon, {
    type: type
  }));
  var use = icon.find('use');
  expect(use.props().xlinkHref).toEqual("#icon-".concat(type));
});
test('new type passed to xlink:href', function () {
  var type = 'answer';
  var icon = shallow(React.createElement(Icon, {
    type: type
  }));
  var use = icon.find('use');
  expect(use.props().xlinkHref).toEqual("#icon-".concat(type));
});
test('colors', function () {
  var type = TYPE.ANSWER;
  var color = ICON_COLOR.DARK;
  var icon = shallow(React.createElement(Icon, {
    type: type,
    color: color
  }));
  expect(icon.hasClass("sg-icon--".concat(color))).toEqual(true);
});
test('size', function () {
  var size = 10;
  var type = TYPE.ANSWER;
  var icon = shallow(React.createElement(Icon, {
    type: type,
    size: size
  }));
  expect(icon.hasClass("sg-icon--x".concat(size))).toEqual(true);
});
test('tag type', function () {
  var component = shallow(React.createElement(Icon, {
    type: TYPE.ANSWER,
    size: "10",
    tagType: "span"
  }));
  expect(component.find('span')).toHaveLength(1);
});
test('other props', function () {
  var type = TYPE.ANSWER;
  var icon = shallow(React.createElement(Icon, {
    type: type,
    "data-something": "else"
  }));
  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});