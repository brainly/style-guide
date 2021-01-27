import * as React from 'react';
import MathSymbol, {MATH_SYMBOL_TYPE, SIZE, ICON_COLOR} from './MathSymbol';
import {shallow} from 'enzyme';

test('render', () => {
  const icon = shallow(<MathSymbol type={MATH_SYMBOL_TYPE.SQUERE_ROOT} />);

  expect(icon.hasClass('sg-math-symbol-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('type passed to xlink:href', () => {
  const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  const icon = shallow(<MathSymbol type={type} />);
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#sg-math-symbol-icon-${type}`);
});

test('colors', () => {
  const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  const color = ICON_COLOR.DARK;
  const icon = shallow(<MathSymbol type={type} color={color} />);

  expect(icon.hasClass(`sg-math-symbol-icon--${color}`)).toEqual(true);
});

test('size', () => {
  const size = SIZE.SMALL;
  const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  const icon = shallow(<MathSymbol type={type} size={size} />);

  expect(icon.hasClass(`sg-math-symbol-icon--${size}`)).toEqual(true);
});

test('wide', () => {
  const type = MATH_SYMBOL_TYPE.LIMIT;
  const icon = shallow(<MathSymbol type={type} />);

  expect(icon.hasClass('sg-math-symbol-icon--wide')).toEqual(true);
});

test('wide with size', () => {
  const type = MATH_SYMBOL_TYPE.LIMIT;
  const size = SIZE.SMALL;
  const icon = shallow(<MathSymbol type={type} size={size} />);

  expect(icon.hasClass('sg-math-symbol-icon--wide-small')).toEqual(true);
});

test('other props', () => {
  const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
  const icon = shallow(<MathSymbol type={type} data-something="else" />);

  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});
