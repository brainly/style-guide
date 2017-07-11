import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT} from '../text/Text';
import {shallow, mount} from 'enzyme';

describe('Text', () => {
  test('render', () => {
    const text = shallow(
      <Text>Test</Text>
    );

    expect(text.hasClass('sg-text')).toBeTruthy();
  });

  test('type', () => {
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
