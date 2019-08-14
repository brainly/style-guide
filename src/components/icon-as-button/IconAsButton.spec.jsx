import React from 'react';
import IconAsButton, {TYPE, ICON_COLOR, SIZE} from './IconAsButton';
import Icon from 'icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const type = TYPE.STAR;
  const iconAsButton = shallow(<IconAsButton type={type} />);
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button')).toEqual(true);
  expect(icon).toHaveLength(1);
  expect(icon.props().type).toEqual(type);
});

test('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR.DARK;
  const iconAsButton = shallow(<IconAsButton type={type} color={color} />);

  expect(iconAsButton.hasClass('sg-icon-as-button--dark')).toEqual(true);
});

test('size', () => {
  const size = SIZE.SMALL;
  const sizeOfSmallIco = 18;
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} size={size} />);
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button--small')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfSmallIco);
});

test('default size', () => {
  const sizeOfNormallIco = 26;
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} />);
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button--normal')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfNormallIco);
});

test('border', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} border />);

  expect(iconAsButton.hasClass('sg-icon-as-button--with-border')).toEqual(true);
});

test('transparent', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} transparent />);

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
});

test('transparent active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} transparent active />);

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
  expect(
    iconAsButton.hasClass('sg-icon-as-button--transparent-active')
  ).toEqual(true);
});

test('action', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} action />);

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
});

test('action active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(<IconAsButton type={type} action active />);

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--action-active')).toEqual(
    true
  );
});

test('link as button', () => {
  const type = TYPE.ANSWER;
  const href = 'http://brainly.test';

  const iconAsButton = shallow(<IconAsButton type={type} href={href} />);

  expect(iconAsButton.find('a')).toHaveLength(1);
});
