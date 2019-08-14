import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxTitle from './ContentBoxTitle';
import {shallow} from 'enzyme';

describe('<ContentBoxTitle />', () => {
  it('renders', () => {
    const testBox = shallow(<ContentBoxTitle>test</ContentBoxTitle>);

    expect(testBox.hasClass('sg-content-box__title')).toEqual(true);
  });

  it('has class that aligns elements to center', () => {
    const testBox = shallow(
      <ContentBoxTitle align={ALIGNMENT.CENTER}>test</ContentBoxTitle>
    );

    expect(
      testBox.hasClass('sg-content-box__title--with-centered-elements')
    ).toEqual(true);
  });

  it('has spaced class', () => {
    const testBox = shallow(<ContentBoxTitle spaced>test</ContentBoxTitle>);
    const testBox2 = shallow(
      <ContentBoxTitle spacedSmall>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced')).toEqual(true);
    expect(testBox2.hasClass('sg-content-box__title--spaced-small')).toEqual(
      true
    );
  });

  it('has spacedTop proper class', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedTop={SIZE.NORMAL}>test</ContentBoxTitle>
    );

    expect(testBox.hasClass('sg-content-box__title--spaced-top')).toBeTruthy();
    expect(
      testBox.hasClass('sg-content-box__title--spaced-top-normal')
    ).toBeFalsy();
  });

  it('has spacedTop class with proper size', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedTop={SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(
      testBox.hasClass('sg-content-box__title--spaced-top-xsmall')
    ).toEqual(true);
  });

  it('has spacedBottom proper class', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedBottom={SIZE.NORMAL}>test</ContentBoxTitle>
    );

    expect(
      testBox.hasClass('sg-content-box__title--spaced-bottom')
    ).toBeTruthy();
    expect(
      testBox.hasClass('sg-content-box__title--spaced-bottom-normal')
    ).toBeFalsy();
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = shallow(
      <ContentBoxTitle spacedBottom={SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(
      testBox.hasClass('sg-content-box__title--spaced-bottom-xsmall')
    ).toEqual(true);
  });
});
