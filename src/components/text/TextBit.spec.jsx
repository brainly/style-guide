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
    <TextBit size={TB_SIZE.XXLARGE}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--xxlarge')).toBeTruthy();
});

test('type', () => {
  const textBit = mount(
    <TextBit type={TB_TYPE.H3}>Test</TextBit>
  );

  expect(textBit.props().type).toEqual(TB_TYPE.H3);
});

test('color', () => {
  const textBit = shallow(
    <TextBit color={TB_COLOR.ALT}>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--alt')).toBeTruthy();
});

test('not responsive', () => {
  const textBit = shallow(
    <TextBit notResponsive>Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--not-responsive')).toBeTruthy();
});
