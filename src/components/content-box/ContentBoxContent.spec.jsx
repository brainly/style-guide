import React from 'react';
import ContentBoxContent from './ContentBoxContent';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import {shallow} from 'enzyme';

describe('<ContentBoxContent />', () => {
  it('renders', () => {
    const testBox = shallow(<ContentBoxContent>test</ContentBoxContent>);

    expect(testBox.hasClass('sg-content-box__content')).toEqual(true);
  });

  it('has full class', () => {
    const testBox = shallow(<ContentBoxContent full>test</ContentBoxContent>);

    expect(testBox.hasClass('sg-content-box__content--full')).toEqual(true);
  });

  it('has class that aligns elements to right', () => {
    const testBox = shallow(
      <ContentBoxContent align={ALIGNMENT.RIGHT}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--with-elements-to-right')
    ).toEqual(false);
  });

  it('has class that aligns elements to center', () => {
    const testBox = shallow(
      <ContentBoxContent align={ALIGNMENT.CENTER}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--with-centered-text')
    ).toEqual(true);
  });

  it('has spacedTop proper class', () => {
    const testBox = shallow(
      <ContentBoxContent spacedTop={SIZE.NORMAL}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--spaced-top')
    ).toBeTruthy();
    expect(
      testBox.hasClass('sg-content-box__content--spaced-top-normal')
    ).toBeFalsy();
  });

  it('has spacedTop class with proper size', () => {
    const testBox = shallow(
      <ContentBoxContent spacedTop={SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--spaced-top-xsmall')
    ).toEqual(true);
  });

  it('has spacedBottom proper class', () => {
    const testBox = shallow(
      <ContentBoxContent spacedBottom={SIZE.NORMAL}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--spaced-bottom')
    ).toBeTruthy();
    expect(
      testBox.hasClass('sg-content-box__content--spaced-bottom-normal')
    ).toBeFalsy();
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = shallow(
      <ContentBoxContent spacedBottom={SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(
      testBox.hasClass('sg-content-box__content--spaced-bottom-xsmall')
    ).toEqual(true);
  });
});
