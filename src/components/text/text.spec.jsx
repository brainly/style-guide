import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT} from '../text/Text';
import TextBit, {TYPE as TB_TYPE, SIZE as TB_SIZE, COLOR as TB_COLOR} from '../text/TextBit';
import {shallow, mount} from 'enzyme';

describe('Text', () => {
  test('render', () => {
    const text = shallow(
      <Text>Test</Text>
    );

    expect(text.hasClass('sg-text')).toBeTruthy();
  });

  test('size', () => {
    const text = shallow(
      <Text size={SIZE.STANDOUT}>Test</Text>
    );

    expect(text.hasClass('sg-text--standout')).toBeTruthy();
  });

  test('type', () => {
    const text = mount(
      <Text type={TYPE.SPAN}>Test</Text>
    );

    expect(text.props().type).toEqual(TYPE.SPAN);
  });

  test('color', () => {
    const text = shallow(
      <Text color={COLOR.MINT}>Test</Text>
    );

    expect(text.hasClass('sg-text--mint')).toBeTruthy();
  });

  test('weight', () => {
    const text = shallow(
      <Text weight={WEIGHT.BOLD}>Test</Text>
    );

    expect(text.hasClass('sg-text--emphasised')).toBeTruthy();
  });
});

describe('TextBit', () => {
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

});
