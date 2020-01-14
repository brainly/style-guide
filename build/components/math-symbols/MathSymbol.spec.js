import React from 'react';
import MathSymbol, { MATH_SYMBOL_TYPE, SIZE, ICON_COLOR } from './MathSymbol';
import { shallow } from 'enzyme';
test('render', function () {
  var icon = shallow(React.createElement(MathSymbol, {
    type: MATH_SYMBOL_TYPE.SQUERE_ROOT
  }));
  expect(icon.hasClass('sg-math-symbol-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});
test('type passed to xlink:href', function () {
  var type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type
  }));
  var use = icon.find('use');
  expect(use.props().xlinkHref).toEqual("#sg-math-symbol-icon-".concat(type));
});
test('colors', function () {
  var type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  var color = ICON_COLOR.DARK;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type,
    color: color
  }));
  expect(icon.hasClass("sg-math-symbol-icon--".concat(color))).toEqual(true);
});
test('size', function () {
  var size = SIZE.SMALL;
  var type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type,
    size: size
  }));
  expect(icon.hasClass("sg-math-symbol-icon--".concat(size))).toEqual(true);
});
test('wide', function () {
  var type = MATH_SYMBOL_TYPE.LIMIT;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type
  }));
  expect(icon.hasClass('sg-math-symbol-icon--wide')).toEqual(true);
});
test('wide with size', function () {
  var type = MATH_SYMBOL_TYPE.LIMIT;
  var size = SIZE.SMALL;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type,
    size: size
  }));
  expect(icon.hasClass('sg-math-symbol-icon--wide-small')).toEqual(true);
});
test('other props', function () {
  var type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  var icon = shallow(React.createElement(MathSymbol, {
    type: type,
    "data-something": "else"
  }));
  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});