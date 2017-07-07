import React from 'react';
import ContentBox from './ContentBox';
import ContentBoxContent, {SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxContent';
// import ContentBoxTitle from './ContentBoxTitle';
// import ContentBoxActions from './ContentBoxActions';
// import ContentBoxHeader from './ContentBoxHeader';
import {shallow, mount} from 'enzyme';

describe('content box', () => {
  xtest('render', () => {
    const contentBox = shallow(
      <ContentBox>test</ContentBox>
    );

    expect(contentBox.hasClass('sg-content-box__content')).toEqual(true);
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
      <ContentBoxContent space={SPACE.BOTTOM}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--spaced-bottom')).toEqual(true);
  });

  test('space default size', () => {
    const testBox = shallow(
      <ContentBoxContent space={SPACE.TOP} spaceSize={SPACE_SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(testBox.hasClass('sg-content-box__content--spaced-top-xsmall')).toEqual(true);
  });
});
