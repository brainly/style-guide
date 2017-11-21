import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxActions from './ContentBoxActions';
import {shallow} from 'enzyme';

describe('Actions', () => {
  test('render', () => {
    const testBox = shallow(
      <ContentBoxActions>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions')).toEqual(true);
  });

  test('centered elements', () => {
    const testBox = shallow(
      <ContentBoxActions align={ALIGNMENT.CENTER}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--with-centered-elements')).toEqual(true);
  });

  test('elements to right', () => {
    const testBox = shallow(
      <ContentBoxActions align={ALIGNMENT.RIGHT}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--with-elements-to-right')).toEqual(true);
  });

  test('spaced top', () => {
    const testBox = shallow(
      <ContentBoxActions spacedTop={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--spaced-top-xsmall')).toEqual(true);
  });

  test('spaced bottom', () => {
    const testBox = shallow(
      <ContentBoxActions spacedBottom={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--spaced-bottom-xsmall')).toEqual(true);
  });
});
