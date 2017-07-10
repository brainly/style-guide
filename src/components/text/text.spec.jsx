import React from 'react';
import Text, {TYPE, COLOR, WEIGHT} from '../text/Text';
import {shallow} from 'enzyme';

describe('Text', () => {
  test('render', () => {
    const text = shallow(
      <Text>Test</Text>
    );

    expect(text.hasClass('sg-text')).toBeTruthy();
  });

  test('type', () => {
    const text = shallow(
      <Text type={TYPE.STANDOUT}>Test</Text>
    );

    expect(text.hasClass('sg-text--standout')).toBeTruthy();
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
