import React from 'react';
import ContentBox from './ContentBox';
import ContentBoxContent, {SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxContent';
import ContentBoxTitle from './ContentBoxTitle';
import ContentBoxActions from './ContentBoxActions';

import ContentBoxHeader from './ContentBoxHeader';
import {shallow, mount} from 'enzyme';

describe('content box', () => {
  test('render', () => {
    const contentBox = shallow(
      <ContentBox>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box')).toEqual(true);
  });

  test('full', () => {
    const contentBox = mount(
      <ContentBox full={true}>test</ContentBox>
    );

    expect(contentBox.props().full).toEqual(true);
  });

  test('is spaced', () => {
    const contentBox = shallow(
      <ContentBox isSpaced={true}>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box--spaced')).toEqual(true);
  });
});

describe('Content', () => {
  test('render', () => {
    const testBox = shallow(
      <ContentBoxContent>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content')).toEqual(true);
  });

  test('full', () => {
    const testBox = mount(
      <ContentBoxContent full={true}>test</ContentBoxContent>
    );

    expect(testBox.props().full).toEqual(true);
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
      <ContentBoxContent space={SPACE.TOP} spaceSize={SPACE_SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--spaced-top-xsmall')).toEqual(true);
  });
});

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

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxHeader space={SPACE.BOTTOM}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-bottom')).toEqual(true);
  });

  test('is spaced', () => {
    const testBox = shallow(
      <ContentBoxHeader isSpaced={true}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced')).toEqual(true);
  });

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxHeader space={SPACE.TOP} spaceSize={SPACE_SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-top-xsmall')).toEqual(true);
  });
});

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

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxTitle space={SPACE.BOTTOM}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced-bottom')).toEqual(true);
  });

  test('is spaced', () => {
    const testBox = shallow(
      <ContentBoxTitle isSpaced={true}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced')).toEqual(true);
  });

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxTitle space={SPACE.TOP} spaceSize={SPACE_SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced-top-xsmall')).toEqual(true);
  });
});

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

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxActions space={SPACE.TOP} spaceSize={SPACE_SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--spaced-top-xsmall')).toEqual(true);
  });
});
