import * as React from 'react';
import TextBit, {TEXT_BIT_TYPE, TEXT_BIT_SIZE, TEXT_COLOR} from './TextBit';
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
  const textBit = shallow(<TextBit size={TEXT_BIT_SIZE.MEDIUM}>Test</TextBit>);

  expect(textBit.hasClass('sg-text-bit--medium')).toBeFalsy();
});

test('type', () => {
  const textBit = mount(<TextBit type={TEXT_BIT_TYPE.H3}>Test</TextBit>);

  expect(textBit.props().type).toEqual(TEXT_BIT_TYPE.H3);
});

test('color', () => {
  const textBit = shallow(
    <TextBit color="text-blue-40">Test</TextBit>
  );

  expect(textBit.hasClass('sg-text-bit--text-blue-40')).toBeTruthy();
});
