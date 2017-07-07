import React from 'react';
import IconAsButton, {TYPE, colors, sizes} from './IconAsButton';
import Icon from '../icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const type = TYPE.star;
  const iconAsButton = shallow(
    <IconAsButton type={type}/>
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button')).toEqual(true);
  expect(icon).toHaveLength(1);
  expect(icon.props().type).toEqual(type);
});

test('error when no type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<IconAsButton/>);
  expect(console.error.mock.calls).toHaveLength(2);

  spy.mockRestore();
});

test('colors', () => {
  const type = TYPE.answer;
  const color = colors.dark;
  const iconAsButton = shallow(
    <IconAsButton type={type} color={color}/>
  );

  expect(iconAsButton.hasClass(`sg-icon-as-button--${color}`)).toEqual(true);
});


test('size', () => {
  const size = sizes.small;
  const sizeOfSmallIco = 18;
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} size={size}/>
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass(`sg-icon-as-button--${size}`)).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfSmallIco);
});

test('default size', () => {
  const size = sizes.normal;
  const sizeOfNormallIco = 26;
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type}/>
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass(`sg-icon-as-button--${size}`)).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfNormallIco);
});


test('border', () => {
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} border={true}/>
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--with-border')).toEqual(true);
});

test('transparent', () => {
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} transparent={true}/>
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
});

test('transparent active', () => {
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} transparent={true} active={true}/>
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--transparent-active')).toEqual(true);
});

test('action', () => {
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} action={true}/>
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
});

test('action active', () => {
  const type = TYPE.answer;
  const iconAsButton = shallow(
    <IconAsButton type={type} action={true} active={true}/>
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--action-active')).toEqual(true);
});
