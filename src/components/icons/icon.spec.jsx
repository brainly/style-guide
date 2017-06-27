import React from 'react';
import Icon, {types, colors} from './Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const icon = shallow(
    <Icon type={types.answer}/>
  );

  expect(icon.hasClass('sg-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('error when no type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Icon/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('type passed to xlink:href', () => {
  const type = types.answer;
  const icon = shallow(
    <Icon type={type}/>
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual('#icon-' + type);
});


test('colors', () => {
  const type = types.answer;
  const color = colors.dark;
  const icon = shallow(
    <Icon type={type} color={color}/>
  );

  expect(icon.hasClass(`sg-icon--${color}`)).toEqual(true);
});


test('size', () => {
  const size = 10;
  const type = types.answer;
  const icon = shallow(
    <Icon type={type} size={size}/>
  );

  expect(icon.hasClass(`sg-icon--x${size}`)).toEqual(true);
});

