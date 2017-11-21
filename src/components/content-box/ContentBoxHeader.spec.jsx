import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxHeader from './ContentBoxHeader';
import {shallow} from 'enzyme';

describe('Header', () => {
  test('render', () => {
    const testBox = shallow(
      <ContentBoxHeader>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header')).toEqual(true);
  });

  test('centered elements', () => {
    const testBox = shallow(
      <ContentBoxHeader align={ALIGNMENT.CENTER}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--with-centered-elements')).toEqual(true);
  });

  test('spacing default size', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedBottom={SIZE.NORMAL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-bottom')).toEqual(true);
  });

  test('is spaced', () => {
    const testBox = shallow(
      <ContentBoxHeader spaced>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced')).toEqual(true);
  });

  test('spacing top', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedTop={SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-top-xsmall')).toEqual(true);
  });
});
