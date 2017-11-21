import React from 'react';
import ContentBoxContent from './ContentBoxContent';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import {shallow} from 'enzyme';

describe('Content', () => {
  test('render', () => {
    const testBox = shallow(
      <ContentBoxContent>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content')).toEqual(true);
  });

  test('full', () => {
    const testBox = shallow(
      <ContentBoxContent full>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--full')).toEqual(true);
  });

  test('right align', () => {
    const testBox = shallow(
      <ContentBoxContent align={ALIGNMENT.RIGHT}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--with-elements-to-right')).toEqual(false);
  });

  test('centered text', () => {
    const testBox = shallow(
      <ContentBoxContent align={ALIGNMENT.CENTER}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--with-centered-text')).toEqual(true);
  });

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxContent spacedTop={SIZE.NORMAL}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--spaced-top')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__content--spaced-top-normal')).toBeFalsy();
  });

  test('spaced bottom', () => {
    const testBox = shallow(
      <ContentBoxContent spacedBottom={SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--spaced-bottom-xsmall')).toEqual(true);
  });
});
