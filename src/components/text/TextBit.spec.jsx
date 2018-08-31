import React from 'react';
import TextBit, {TYPE as TB_TYPE, SIZE as TB_SIZE, COLOR as TB_COLOR} from './TextBit';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const textBit = shallow(
    <TextBit type={TB_TYPE.H1}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit')).toBeTruthy();
});

test('sie', () => {
  const textBit = shallow(
    <TextBit size={TB_SIZE.XLARGE}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--xlarge')).toBeTruthy();
});

test('type', () => {
  const textBit = mount(
    <TextBit type={TB_TYPE.H3}>Test</TextBit>
  );

  expect(textBit.props().type).toEqual(TB_TYPE.H3);
});

test('color', () => {
  const textBit = shallow(
    <TextBit color={TB_COLOR.BLUE_SECONDARY}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--blue-secondary')).toBeTruthy();
});
