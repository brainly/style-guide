import React from 'react';
import ContentBox, {CONTENT_BOX_SPACING_SIZE} from './ContentBox';
import {shallow} from 'enzyme';

describe('content box', () => {
  test('render', () => {
    const contentBox = shallow(
      <ContentBox>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box')).toEqual(true);
  });

  test('full', () => {
    const contentBox = shallow(
      <ContentBox full>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box--full')).toEqual(true);
  });

  test('is spaced', () => {
    const contentBox = shallow(
      <ContentBox spaced>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box--spaced')).toEqual(true);
  });

  test('spacedBottom normal', () => {
    const testBox = shallow(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.NORMAL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-bottom')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-bottom-normal')).toEqual(false);
  });

  test('spacedBottom size', () => {
    const testBox = shallow(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.XSMALL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-bottom-xsmall')).toEqual(true);
  });

  test('spacedTop normal', () => {
    const testBox = shallow(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.NORMAL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-top')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-top-normal')).toEqual(false);
  });

  test('spacedTop size', () => {
    const testBox = shallow(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.XSMALL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-top-xsmall')).toEqual(true);
  });
});
