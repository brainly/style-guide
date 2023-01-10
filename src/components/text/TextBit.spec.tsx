import * as React from 'react';
import TextBit, {TEXT_BIT_TYPE, TEXT_BIT_SIZE} from './TextBit';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const textBit = shallow(<TextBit type={TEXT_BIT_TYPE.H1}>Test</TextBit>);
  expect(textBit.hasClass('sg-text-bit')).toBeTruthy();
});
test('size', () => {
  const textBit = shallow(<TextBit size={TEXT_BIT_SIZE.XLARGE}>Test</TextBit>);
  expect(textBit.hasClass('sg-text-bit--xlarge')).toBeTruthy();
});
test('size is responsive prop', () => {
  const component = shallow(
    <TextBit size={[TEXT_BIT_SIZE.LARGE, TEXT_BIT_SIZE.XLARGE]}>Test</TextBit>
  );
  expect(
    component.hasClass('sg-text-bit--large md:sg-text-bit--xlarge')
  ).toEqual(true);
});
test('type', () => {
  const textBit = mount(<TextBit type={TEXT_BIT_TYPE.H3}>Test</TextBit>);
  expect(textBit.props().type).toEqual(TEXT_BIT_TYPE.H3);
});
test('color', () => {
  const textBit = shallow(<TextBit color="text-blue-40">Test</TextBit>);
  expect(textBit.hasClass('sg-text-bit--text-blue-40')).toBeTruthy();
});
