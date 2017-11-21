import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxTitle from './ContentBoxTitle';
import {shallow} from 'enzyme';

describe('Title', () => {
  test('render', () => {
    const testBox = shallow(
      <ContentBoxTitle>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title')).toEqual(true);
  });

  test('centered elements', () => {
    const testBox = shallow(
      <ContentBoxTitle align={ALIGNMENT.CENTER}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--with-centered-elements')).toEqual(true);
  });

  test('spacing default sie', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedBottom={SIZE.NORMAL}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced-bottom')).toEqual(true);
    expect(testBox.hasClass('sg-content-box__title--spaced-bottom-normal')).toEqual(false);
  });

  test('is spaced', () => {
    const testBox = shallow(
      <ContentBoxTitle spaced>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced')).toEqual(true);
  });

  test('spacing', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedTop={SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced-top-xsmall')).toEqual(true);
  });
});
