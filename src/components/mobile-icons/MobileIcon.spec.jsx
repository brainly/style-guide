import React from 'react';
import MobileIcon, {TYPE, ICON_COLOR} from './MobileIcon';
import {shallow} from 'enzyme';

test('render if type', () => {
  const icon = shallow(<MobileIcon type={TYPE.ANSWER_BUBBLE} />);

  expect(icon.hasClass('sg-mobile-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('type passed to xlink:href', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const icon = shallow(<MobileIcon type={type} />);
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-mobile-${type}`);
});

test('colors', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const color = ICON_COLOR.DARK;
  const icon = shallow(<MobileIcon type={type} color={color} />);

  expect(icon.hasClass(`sg-mobile-icon--${color}`)).toEqual(true);
});

test('size', () => {
  const size = 10;
  const type = TYPE.ANSWER_BUBBLE;
  const icon = shallow(<MobileIcon type={type} size={size} />);

  expect(icon.hasClass(`sg-mobile-icon--x${size}`)).toEqual(true);
});

test('other props', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const icon = shallow(<MobileIcon type={type} data-something="else" />);

  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});
