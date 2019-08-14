import React from 'react';
import TextBit, {TEXT_BIT_TYPE, TEXT_BIT_SIZE, TEXT_BIT_COLOR} from './TextBit';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const textBit = shallow(<TextBit type={TEXT_BIT_TYPE.H1}>Test</TextBit>);

  expect(textBit.hasClass('sg-text-bit')).toBeTruthy();
});

test('size', () => {
  const textBit = shallow(<TextBit size={TEXT_BIT_SIZE.XLARGE}>Test</TextBit>);

  expect(textBit.hasClass('sg-text-bit--xlarge')).toBeTruthy();
});

test('should not pass size when default passed', () => {
  const textBit = shallow(<TextBit size={TEXT_BIT_SIZE.NORMAL}>Test</TextBit>);

  expect(textBit.hasClass('sg-text-bit--normal')).toBeFalsy();
});

test('type', () => {
  const textBit = mount(<TextBit type={TEXT_BIT_TYPE.H3}>Test</TextBit>);

  expect(textBit.props().type).toEqual(TEXT_BIT_TYPE.H3);
});

test('color', () => {
  const textBit = shallow(
    <TextBit color={TEXT_BIT_COLOR.BLUE_SECONDARY}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--blue-secondary')).toBeTruthy();
});
